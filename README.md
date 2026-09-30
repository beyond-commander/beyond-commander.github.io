# Beyond Commander website

Static GitHub Pages website for **Beyond Commander**.

- Website: https://beyond-commander.github.io/
- GitHub organization: https://github.com/beyond-commander

Beyond Commander is a modern, multi-platform Commander-style file manager for Linux, Windows, macOS and Android.

## Platform downloads

| Platform | Releases |
| --- | --- |
| Linux | https://github.com/beyond-commander/beyondcmd/releases |
| Windows | https://github.com/beyond-commander/beyondcmd.win/releases |
| macOS | https://github.com/beyond-commander/beyondcmd.app/releases |
| Android | https://github.com/beyond-commander/beyondcmd.apk/releases |

Linux packages include **AppImage, DEB, RPM and Flatpak**.

## Public pages

- `index.html` — home page and platform downloads
- `features.html` — feature overview and Beyond Commander 0.7.0 additions
- `gallery.html` — platform screenshot gallery
- `plugins.html` — plugin compatibility, WCL modules and Linux packages
- `pro.html` — Android Pro roadmap
- `license.html` — license and pricing
- `support.html` — contact, support and bug-report links
- `about.html` — project background

## Localization

The site supports:

- English
- Hungarian
- German

English text is present directly in the HTML as a fallback. `assets/site.js` progressively replaces that text when another language is selected.

JavaScript must **not** generate or replace the site navigation, footer, home hero image, or other essential page structure. If JavaScript is unavailable, the site must remain complete and usable in English.

## SEO and crawlability

The site is static-first:

- every page contains crawlable `<a href>` navigation in raw HTML;
- headings and localized content have real English fallback text;
- every public page has a unique title, description and canonical URL;
- Open Graph and Twitter metadata are included;
- the home page contains `Organization`, `WebSite` and `SoftwareApplication` JSON-LD;
- `robots.txt` points to the canonical sitemap URL;
- `sitemap.xml` lists all public pages.

Canonical sitemap URL:

`https://beyond-commander.github.io/sitemap.xml`

Do not submit a double-slash URL such as `https://beyond-commander.github.io//sitemap.xml`.

## Important assets

- `assets/bc2.svg` — official application icon
- `assets/favicon.ico` — browser favicon
- `assets/apple-touch-icon.png` — Apple touch icon
- `assets/beyond-commander-social.png` — Open Graph/social preview
- `assets/features-comparison-light.webp` — Features comparison image
- `assets/hero-perspective-en-v2.png` — home-page hero image
- `assets/beyondcmd.app_white.webp` — License page artwork

## Bug reports

Bug reports and requests are accepted through GitHub.

- Windows: https://github.com/beyond-commander/beyondcmd.win/issues
- Linux: https://github.com/beyond-commander/beyondcmd
- macOS: https://github.com/beyond-commander/beyondcmd.app/issues
- Android: https://github.com/beyond-commander/beyondcmd.apk/issues

## Deployment

The site is plain HTML, CSS and JavaScript and is published with GitHub Pages.

After page, URL or asset changes, keep `sitemap.xml`, `robots.txt`, metadata and this README synchronized.
