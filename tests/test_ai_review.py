import copy
import importlib.util
import os
from pathlib import Path
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('ai_review', Path(__file__).resolve().parents[1] / 'scripts/ai_review.py')
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)
PASS = {'verdict': 'pass', 'summary': 'Safe documentation change.', 'findings': []}
BLOCK = {'verdict': 'block', 'summary': 'Authorization regression.', 'findings': [
    {'path': 'api/auth.js', 'severity': 'P1', 'explanation': 'The change removes authentication.'}]}
PR = {'head': {'sha': 'a'*40, 'repo': {'full_name': 'SpicyCarrot25/dirty-rabbit-website'}},
      'base': {'sha': 'b'*40, 'ref': 'main'}, 'state': 'open', 'draft': False, 'changed_files': 1}
EVENT = {'pull_request': PR}

class Fake(m.GitHub):
    def __init__(self):
        super().__init__('SpicyCarrot25/dirty-rabbit-website', 1, 'test')
        self.statuses, self.comments, self.reads = [], [], 0
        self.current = copy.deepcopy(PR)
    def pr(self):
        self.reads += 1
        return copy.deepcopy(self.current)
    def status(self, sha, state, description): self.statuses.append((sha, state))
    def comment(self, sha, body): self.comments.append(body)
    def packet(self, pr): return {'files': [{'path': 'api/auth.js', 'before': '', 'after': ''}]}

class Tests(unittest.TestCase):
    def setUp(self):
        self.env = patch.dict(os.environ, {'OPENROUTER_API_KEY': 'fake-test-credential'})
        self.env.start()
        self.addCleanup(self.env.stop)
    def test_success_is_explicit_and_current(self):
        gh = Fake()
        with patch.object(m, 'review', return_value=PASS): self.assertEqual(m.run(gh, EVENT), 0)
        self.assertEqual([s[1] for s in gh.statuses], ['pending', 'success'])
        self.assertEqual(gh.reads, 2)
        self.assertIn('No blocking issues', gh.comments[0])
    def test_blocking_finding_keeps_red_and_explains(self):
        gh = Fake()
        with patch.object(m, 'review', return_value=BLOCK): self.assertEqual(m.run(gh, EVENT), 1)
        self.assertEqual(gh.statuses[-1][1], 'failure')
        self.assertIn('removes authentication', gh.comments[0])
    def test_missing_secret_fails_closed(self):
        gh = Fake()
        with patch.dict(os.environ, {'OPENROUTER_API_KEY': ''}), patch.object(m, 'review') as review:
            self.assertEqual(m.run(gh, EVENT), 1)
            review.assert_not_called()
    def test_provider_failure_is_red_and_does_not_log_exception(self):
        gh = Fake()
        with patch.object(m, 'review', side_effect=RuntimeError('sensitive provider body')):
            self.assertEqual(m.run(gh, EVENT), 1)
        self.assertNotIn('sensitive', gh.comments[0])
        self.assertEqual(gh.statuses[-1][1], 'failure')
    def test_push_during_review_is_not_approved(self):
        gh = Fake()
        def change(*args):
            gh.current['head']['sha'] = 'c'*40
            return PASS
        with patch.object(m, 'review', side_effect=change): self.assertEqual(m.run(gh, EVENT), 1)
        self.assertNotIn('success', [s[1] for s in gh.statuses])
    def test_base_changes_during_review_is_not_approved(self):
        gh = Fake()
        def change(*args):
            gh.current['base']['sha'] = 'd'*40
            return PASS
        with patch.object(m, 'review', side_effect=change): self.assertEqual(m.run(gh, EVENT), 1)
        self.assertEqual(gh.statuses[-1][1], 'failure')
    def test_stale_event_does_not_call_model(self):
        gh = Fake(); gh.current['head']['sha'] = 'e'*40
        with patch.object(m, 'review') as review:
            self.assertEqual(m.run(gh, EVENT), 1); review.assert_not_called()
    def test_malformed_or_conflicting_verdict_never_passes(self):
        for result in [{}, {'verdict': 'pass', 'summary': 'ok', 'findings': BLOCK['findings']},
                       {'verdict': 'block', 'summary': 'ok', 'findings': []},
                       {**PASS, 'extra': True}, {**BLOCK, 'findings': [{**BLOCK['findings'][0], 'path': 'unknown'}]}]:
            with self.assertRaises(m.Blocked): m.validate(result, {'api/auth.js'})
    def test_credential_never_reaches_model(self):
        for secret in ['fake-test-credential', 'sk-or-v1-'+'a'*50, '-----BEGIN PRIVATE KEY-----']:
            packet = {'files': [{'path': 'a.js', 'after': secret}]}
            with patch.object(m, 'request') as req, self.assertRaises(m.Blocked): m.review(packet, 'test')
            req.assert_not_called()
    def test_truncation_never_passes(self):
        with patch.object(m, 'request', return_value={'choices': [{'finish_reason': 'length', 'message': {'content': '{}'}}]}):
            with self.assertRaises(m.Blocked): m.review({'files': []}, 'test')
    def test_large_packet_never_sent(self):
        with patch.object(m, 'request') as req, self.assertRaises(m.Blocked):
            m.review({'files': [{'path': 'a', 'after': 'a'*m.MAX_BYTES}]}, 'test')
        req.assert_not_called()
    def test_sensitive_or_policy_paths_block_before_content_fetch(self):
        for path in ['.github/workflows/ai-review.yml', 'scripts/ai_review.py', '.env.production', 'private.key']:
            gh = m.GitHub('SpicyCarrot25/dirty-rabbit-website', 1, 'test')
            with patch.object(gh, 'api', side_effect=[[{'filename': path}], {'merge_base_commit': {'sha': 'b'*40}}]), patch.object(gh, 'content') as content:
                with self.assertRaises(m.Blocked): gh.packet(PR)
                content.assert_not_called()
    def test_forks_do_not_spend_key(self):
        pr = copy.deepcopy(PR); pr['head']['repo']['full_name'] = 'outsider/fork'
        gh = m.GitHub('SpicyCarrot25/dirty-rabbit-website', 1, 'test')
        with patch.object(gh, 'api') as api, self.assertRaises(m.Blocked): gh.packet(pr)
        api.assert_not_called()
    def test_missing_files_block(self):
        gh = m.GitHub('SpicyCarrot25/dirty-rabbit-website', 1, 'test')
        with patch.object(gh, 'api', return_value=[]), self.assertRaises(m.Blocked): gh.packet(PR)

if __name__ == '__main__': unittest.main()
