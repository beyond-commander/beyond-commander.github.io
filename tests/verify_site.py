#!/usr/bin/env python3
from __future__ import annotations

import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://beyond-commander.github.io/'
RELEASES = 'https://github.com/beyond-commander/beyondcmd/releases'
PAGES = [
    'index.html', 'features.html', 'gallery.html', 'plugins.html',
    'license.html', 'support.html', 'about.html', 'pro.html'
]
REQUIRED_NAV = [
    'index.html', 'features.html', 'gallery.html', 'plugins.html',
    'pro.html', 'license.html', 'support.html', 'about.html'
]


def soup_for(name: str) -> BeautifulSoup:
    p = ROOT / name
    assert p.exists(), f'missing page: {name}'
    return BeautifulSoup(p.read_text(encoding='utf-8'), 'html.parser')


def assert_meta(name: str) -> None:
    s = soup_for(name)
    desc = s.find('meta', attrs={'name': 'description'})
    assert desc and desc.get('content', '').strip(), f'{name}: missing meta description'
    canon = s.find('link', attrs={'rel': 'canonical'})
    assert canon and canon.get('href', '').startswith(BASE), f'{name}: missing/invalid canonical'
    for prop in ('og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image'):
        tag = s.find('meta', attrs={'property': prop})
        assert tag and tag.get('content', '').strip(), f'{name}: missing {prop}'
    for key in ('twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'):
        tag = s.find('meta', attrs={'name': key})
        assert tag and tag.get('content', '').strip(), f'{name}: missing {key}'


def assert_static_nav(name: str) -> None:
    s = soup_for(name)
    nav_host = s.find(id='nav')
    assert nav_host, f'{name}: #nav missing'
    hrefs = {a.get('href') for a in nav_host.find_all('a', href=True)}
    missing = [href for href in REQUIRED_NAV if href not in hrefs]
    assert not missing, f'{name}: static nav missing {missing}'
    visible = ' '.join(nav_host.stripped_strings)
    assert 'Home' in visible and 'Pro' in visible and 'About' in visible, f'{name}: static nav has no visible fallback text'


def assert_fallback_text(name: str) -> None:
    s = soup_for(name)
    for el in s.select('[data-i18n]'):
        # Email placeholders are intentionally filled at runtime to avoid harvesting.
        if el.has_attr('data-contact-email-link') or el.has_attr('data-support-email'):
            continue
        if el.name in ('meta', 'link'):
            continue
        text = ' '.join(el.stripped_strings)
        assert text, f'{name}: empty static fallback for data-i18n={el.get("data-i18n")}'


def assert_static_nav_not_replaced() -> None:
    offenders = []
    for name in PAGES:
        text = (ROOT / name).read_text(encoding='utf-8')
        if 'innerHTML=nav(' in text or "innerHTML = nav(" in text:
            offenders.append(name)
    assert not offenders, f'static navigation is overwritten at runtime in: {offenders}'


def assert_internal_links_exist() -> None:
    missing = []
    for name in PAGES:
        s = soup_for(name)
        for a in s.find_all('a', href=True):
            href = a['href'].strip()
            if not href or href.startswith(('#', 'mailto:', 'http://', 'https://', 'javascript:')):
                continue
            parsed = urlparse(href)
            target = (ROOT / parsed.path).resolve()
            if not target.exists():
                missing.append(f'{name} -> {href}')
    assert not missing, 'broken internal links: ' + ', '.join(missing)


def assert_sitemap() -> None:
    path = ROOT / 'sitemap.xml'
    tree = ET.parse(path)
    ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    entries = {}
    for url in tree.findall('sm:url', ns):
        loc = url.findtext('sm:loc', namespaces=ns)
        lastmod = url.findtext('sm:lastmod', namespaces=ns)
        entries[loc] = lastmod
    for name in PAGES:
        loc = BASE if name == 'index.html' else BASE + name
        assert loc in entries, f'sitemap missing {loc}'
        assert entries[loc] == '2026-08-28', f'sitemap stale lastmod for {loc}: {entries[loc]}'


def assert_index_cta() -> None:
    s = soup_for('index.html')
    assert not s.select('[data-i18n="order"]'), 'index still contains License: Order CTA'
    link = s.find('a', href=RELEASES, class_='github-visit-cta')
    assert link, 'index missing GitHub releases replacement CTA'
    label = link.find(attrs={'data-i18n': 'githubVisit'})
    assert label, 'index GitHub CTA missing translatable label'
    assert 'Visit GitHub releases' in ' '.join(label.stripped_strings), 'index GitHub CTA has no English static fallback'


def assert_pro_page() -> None:
    s = soup_for('pro.html')
    body = ' '.join(s.stripped_strings).lower()
    expected = ['hex editor', 'console', 'virus scan', 'operations', 'sentinel endpoint']
    for term in expected:
        assert term in body, f'pro.html missing visible fallback text for {term}'
    assert 'android' in body, 'pro.html must clearly target Android Pro'
    assert 'coming' in body or 'planned' in body, 'pro.html must clearly state planned/not yet available status'
    canonical = s.find('link', attrs={'rel': 'canonical'})
    assert canonical and canonical.get('href') == BASE + 'pro.html', 'pro canonical incorrect'


def assert_i18n_keys_complete() -> None:
    js = (ROOT / 'assets/site.js').read_text(encoding='utf-8')
    html_keys = set()
    for name in PAGES:
        html_keys.update(re.findall(r'data-i18n=["\']([^"\']+)["\']', (ROOT / name).read_text(encoding='utf-8')))

    node = r'''
const fs = require('fs');
const vm = require('vm');
let src = fs.readFileSync(process.argv[1], 'utf8');
src += '\n;globalThis.__DICT__ = I;';
const noop = () => {};
const fakeNode = {classList:{remove:noop,toggle:noop},matches:()=>false,closest:()=>null,nextElementSibling:null,dataset:{},textContent:'',href:'',innerHTML:''};
const ctx = {
  console,
  localStorage:{getItem:()=>null,setItem:noop},
  document:{
    documentElement:{lang:'en'},
    querySelector:()=>null,
    querySelectorAll:()=>[],
    addEventListener:noop,
    getElementById:()=>fakeNode
  }
};
vm.createContext(ctx);
vm.runInContext(src, ctx);
process.stdout.write(JSON.stringify(ctx.__DICT__));
'''
    proc = subprocess.run(['node', '-e', node, str(ROOT / 'assets/site.js')], text=True, capture_output=True)
    assert proc.returncode == 0, f'cannot evaluate i18n dictionary: {proc.stderr}'
    import json
    d = json.loads(proc.stdout)
    for lang in ('en', 'hu', 'de'):
        missing = sorted(k for k in html_keys if not str(d.get(lang, {}).get(k, '')).strip())
        assert not missing, f'{lang} missing i18n keys: {missing}'


def assert_js_syntax() -> None:
    proc = subprocess.run(['node', '--check', str(ROOT / 'assets/site.js')], text=True, capture_output=True)
    assert proc.returncode == 0, proc.stderr


def main() -> int:
    checks = []
    for name in PAGES:
        checks.append((f'meta {name}', lambda n=name: assert_meta(n)))
        checks.append((f'static nav {name}', lambda n=name: assert_static_nav(n)))
        checks.append((f'fallback {name}', lambda n=name: assert_fallback_text(n)))
    checks += [
        ('index CTA', assert_index_cta),
        ('pro page', assert_pro_page),
        ('sitemap', assert_sitemap),
        ('static nav preserved', assert_static_nav_not_replaced),
        ('internal links', assert_internal_links_exist),
        ('i18n completeness', assert_i18n_keys_complete),
        ('javascript syntax', assert_js_syntax),
    ]

    failures = []
    for label, fn in checks:
        try:
            fn()
            print(f'PASS {label}')
        except Exception as exc:
            failures.append((label, str(exc)))
            print(f'FAIL {label}: {exc}')

    if failures:
        print(f'\n{len(failures)} verification failure(s).', file=sys.stderr)
        return 1
    print('\nAll verification checks passed.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
