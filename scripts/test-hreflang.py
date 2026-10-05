#!/usr/bin/env python3
"""Exercise the crawler's failure paths as well as real translation destinations."""
import importlib.util
import tempfile
from pathlib import Path
spec = importlib.util.spec_from_file_location('checker', Path(__file__).with_name('check-hreflang.py'))
checker = importlib.util.module_from_spec(spec)
spec.loader.exec_module(checker)

def page(lang, links):
    return '<html lang="' + lang + '">' + ''.join(
        f'<link rel="alternate" hreflang="{l}" href="https://dirtyrabbit.es{p}">'
        for l, p in links) + '</html>'

with tempfile.TemporaryDirectory() as tmp:
    root = Path(tmp)
    (root / 'en').mkdir()
    links = [('es', '/'), ('en', '/en')]
    (root / 'index.html').write_text(page('es', links))
    (root / 'en/index.html').write_text(page('en', links))
    assert not checker.check(root)['errors']
    (root / 'en/index.html').write_text(page('en', [('en', '/en')]))
    assert checker.check(root)['nonreciprocal'] == 1
    (root / 'en/index.html').unlink()
    assert checker.check(root)['broken'] == 1
    (root / 'en/index.html').write_text('<meta http-equiv="refresh" content="0;url=/">')
    assert checker.check(root)['broken'] == 1

root = Path('dist')
for source, lang, target in [
    ('/en/guide/best-coffee-begur', 'fr', '/fr/guides/meilleur-cafe-begur'),
    ('/en/articles/where-to-breakfast-sagaro', 'es', '/articulos/donde-desayunar-sagaro'),
    ('/en/privacy', 'es', '/privacidad'),
    ('/news/nueva-web-es', 'en', '/en/news/nueva-web-en'),
]:
    p = checker.Page((root / source.lstrip('/') / 'index.html').read_text())
    assert (lang, 'https://dirtyrabbit.es' + target) in p.links, (source, lang, target)
assert checker.check(root)['pages_with_hreflang'] >= 257, 'Hreflang coverage must not disappear'
print('PASS: broken, nonreciprocal and redirect failures; article, French, privacy, news and coverage regressions')
