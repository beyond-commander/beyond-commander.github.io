# Beyond Commander website

Static GitHub Pages website for **Beyond Commander**:

- Website: https://beyond-commander.github.io/
- Organization: https://github.com/beyond-commander

Beyond Commander is a modern, multi-platform Commander-style file manager for Linux, Windows, macOS and Android.

## Platform downloads

| Platform | Releases |
| --- | --- |
| Linux | https://github.com/beyond-commander/beyondcmd/releases |
| Windows | https://github.com/beyond-commander/beyondcmd.win/releases |
| macOS | https://github.com/beyond-commander/beyondcmd.app/releases |
| Android | https://github.com/beyond-commander/beyondcmd.apk/releases |

Linux builds are published in **RPM, DEB, AppImage and Flatpak** formats.

## Included pages

- `index.html` — Home page, platform selector and download links
- `features.html` — Features and Beyond Commander 0.7.0 additions
- `gallery.html` — Screenshot gallery grouped by platform
- `plugins.html` — WCX/WFX/WLX/WDX compatibility, WCL modules and Linux package links
- `pro.html` — Beyond Commander Pro for Android roadmap
- `license.html` — License and pricing information
- `support.html` — Contact, support and platform-specific bug-report links
- `about.html` — Project background and About page

## Site infrastructure

- `assets/` — Images, screenshots, icons, CSS and JavaScript
- `assets/bc2.svg` — Official Beyond Commander icon
- `assets/favicon.ico` — Browser favicon
- `assets/apple-touch-icon.png` — Apple touch icon
- `assets/beyond-commander-social.png` — Open Graph / social preview image
- `assets/features-comparison-light.webp` — Features comparison artwork
- `sitemap.xml` — XML sitemap
- `robots.txt` — Crawler rules and sitemap discovery

## Localization

The site currently includes:

- English
- Hungarian
- German

Shared UI strings are maintained in `assets/site.js`. The HTML contains English fallback text so page content remains understandable and crawlable before JavaScript localization runs.

## SEO and crawlability

The site is intentionally usable by crawlers without requiring JavaScript for discovery:

- every page contains a static, crawlable navigation with normal `<a href>` links;
- localized headings and text have English fallback content in the raw HTML;
- every public page has a unique title, meta description and canonical URL;
- Open Graph and Twitter metadata are present on every page;
- the home page includes `Organization`, `WebSite` and `SoftwareApplication` JSON-LD;
- `robots.txt` points to the canonical sitemap URL;
- `sitemap.xml` contains all public pages with current `lastmod` dates.

Submit this exact sitemap URL to search engines:

`https://beyond-commander.github.io/sitemap.xml`

Do not submit a double-slash variant such as `https://beyond-commander.github.io//sitemap.xml`.

## Platform repositories

- Linux: https://github.com/beyond-commander/beyondcmd
- Windows: https://github.com/beyond-commander/beyondcmd.win
- macOS: https://github.com/beyond-commander/beyondcmd.app
- Android: https://github.com/beyond-commander/beyondcmd.apk

## Bug reports

Bug reports and feature requests should be submitted through GitHub rather than by email.

- Windows: https://github.com/beyond-commander/beyondcmd.win/issues
- Linux: https://github.com/beyond-commander/beyondcmd
- macOS: https://github.com/beyond-commander/beyondcmd.app/issues
- Android: https://github.com/beyond-commander/beyondcmd.apk/issues

## Deployment

The site is plain static HTML/CSS/JavaScript and is published through GitHub Pages from this repository.

After changing page structure, URLs or public assets, keep `sitemap.xml`, `robots.txt`, social metadata and this README in sync.
