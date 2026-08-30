#!/usr/bin/env python3
from pathlib import Path
from bs4 import BeautifulSoup
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = [
    'index.html','features.html','gallery.html','plugins.html','pro.html',
    'license.html','support.html','about.html'
]
errors=[]

for name in PUBLIC:
    path=ROOT/name
    if not path.exists():
        errors.append(f'{name}: missing')
        continue
    soup=BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser')
    if not soup.title or not soup.title.get_text(strip=True):
        errors.append(f'{name}: missing title')
    desc=soup.find('meta', attrs={'name':'description'})
    if not desc or not (desc.get('content') or '').strip():
        errors.append(f'{name}: missing meta description')
    canonical=soup.find('link', rel='canonical')
    if not canonical or not (canonical.get('href') or '').startswith('https://beyond-commander.github.io'):
        errors.append(f'{name}: missing/invalid canonical')
    nav=soup.select_one('#nav nav.navlinks')
    if not nav:
        errors.append(f'{name}: missing static primary nav')
    else:
        labels=[a.get_text(' ',strip=True) for a in nav.find_all('a')]
        if len(labels) < 8 or any(not x for x in labels):
            errors.append(f'{name}: primary nav has empty/non-static labels: {labels}')
    for el in soup.select('[data-i18n]'):
        # SEO-visible translation targets must have an English fallback in source HTML.
        if el.name in {'script','style'}:
            continue
        if not el.get_text(' ',strip=True):
            errors.append(f'{name}: empty static i18n fallback for {el.name}[data-i18n={el.get("data-i18n")!r}]')

index=BeautifulSoup((ROOT/'index.html').read_text(encoding='utf-8'),'html.parser')
for key in ('eyebrow','hero2','heroCopy','platformsFancy'):
    el=index.select_one(f'[data-i18n="{key}"]')
    if not el or not el.get_text(' ',strip=True):
        errors.append(f'index.html: missing critical static fallback for {key}')

js=(ROOT/'assets/site.js').read_text(encoding='utf-8')
# The legacy nav() helper must also carry source-text fallbacks, so future pages cannot regress
# to a blank pre-render navigation.
nav_match=re.search(r'function\s+nav\(active\)\{return\s+`(?P<body>.*?)`\}', js, re.S)
if not nav_match:
    errors.append('assets/site.js: nav(active) helper not found')
else:
    body=nav_match.group('body')
    for key,label in [('home','Home'),('features','Features'),('gallery','Gallery'),('plugins','Plugins'),('pro','Pro'),('license','License'),('support','Contact'),('about','About')]:
        if not re.search(rf'data-i18n="{re.escape(key)}"[^>]*>\s*{re.escape(label)}\s*</a>', body):
            errors.append(f'assets/site.js: nav helper lacks static fallback label for {key} ({label})')
    if not re.search(r'data-i18n="tagline"[^>]*>\s*Beyond file management\s*</small>', body):
        errors.append('assets/site.js: nav helper lacks static tagline fallback')

if errors:
    print('STATIC SEO VERIFY: FAIL')
    for e in errors:
        print(' -',e)
    sys.exit(1)
print('STATIC SEO VERIFY: PASS')
