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
- `features.html` — Features, highlighted extras and Beyond Commander 0.7.0 additions
- `gallery.html` — Screenshot gallery grouped by platform
- `plugins.html` — WCX/WFX/WLX/WDX compatibility, WCL modules and Linux package links
- `pro.html` — Beyond Commander Pro for Android roadmap
- `license.html` — License and pricing information
- `support.html` — Contact, product support and platform-specific bug-report links
- `about.html` — Project background and About page

## Site infrastructure

- `assets/` — Images, screenshots, icons, CSS and JavaScript
- `assets/bc2.svg` — Official Beyond Commander icon
- `assets/favicon.ico` — Browser favicon
- `assets/apple-touch-icon.png` — Apple touch icon
- `assets/beyond-commander-social.png` — Social/Open Graph preview image
- `assets/features-comparison-light.webp` — Features comparison artwork
- `sitemap.xml` — Search-engine sitemap
- `robots.txt` — Crawler rules and sitemap discovery
- `googlea0b89ce704ce98f5.html` — Google site verification

## Localization

The website currently includes:

- English
- German
- Hungarian

Shared UI strings are maintained in `assets/site.js`.

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

After changing page structure, URLs or public assets, keep `sitemap.xml`, `robots.txt`, social metadata and the README in sync.
