#!/usr/bin/env python3
"""Validate every built HTML hreflang destination and its reciprocal pair (offline)."""
import argparse
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote


def route(url):
    return unquote(urlsplit(url).path).removesuffix('/index.html').rstrip('/') or '/'


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.lang = None
        self.links = []
        self.redirect = False
        self.canonical = None
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'html':
            self.lang = a.get('lang')
        if tag == 'meta' and a.get('http-equiv', '').lower() == 'refresh':
            self.redirect = True
        if tag == 'link':
            if a.get('rel') == 'canonical':
                self.canonical = route(a.get('href', ''))
            if a.get('rel') == 'alternate' and 'hreflang' in a:
                self.links.append((a['hreflang'], a.get('href', '')))


def check(directory):
    pages = {route('/' + str(p.relative_to(directory))): Page(p.read_text())
             for p in directory.rglob('*.html')}
    errors = []
    total = broken = nonreciprocal = 0
    for source, page in sorted(pages.items()):
        if page.redirect:
            continue
        seen = set()
        for lang, href in page.links:
            total += 1
            dest = route(href)
            target = pages.get(dest)
            if lang in seen:
                errors.append({'kind': 'duplicate', 'source': source, 'lang': lang})
            seen.add(lang)
            if not href or urlsplit(href).netloc != 'dirtyrabbit.es' or not target or target.redirect:
                broken += 1
                errors.append({'kind': 'broken', 'source': source, 'lang': lang, 'target': href})
                continue
            if target.canonical and target.canonical != dest:
                errors.append({'kind': 'noncanonical', 'source': source, 'target': dest})
            if lang != 'x-default' and target.lang != lang:
                errors.append({'kind': 'wrong-language', 'source': source, 'target': dest, 'lang': lang})
            if not any(l == page.lang and route(h) == source for l, h in target.links):
                nonreciprocal += 1
                errors.append({'kind': 'nonreciprocal', 'source': source, 'lang': lang, 'target': dest})
        if page.links and not any(l == page.lang and route(h) == source for l, h in page.links):
            errors.append({'kind': 'missing-self', 'source': source})
    return {'pages': len(pages), 'pages_with_hreflang': sum(bool(p.links) for p in pages.values()),
            'links': total, 'broken': broken, 'nonreciprocal': nonreciprocal, 'errors': errors}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('directory', nargs='?', type=Path, default=Path('dist'))
    args = parser.parse_args()
    if not args.directory.is_dir() or not any(args.directory.rglob('*.html')):
        parser.error('Build the site first; no HTML found')
    result = check(args.directory)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    raise SystemExit(bool(result['errors']))
