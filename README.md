# Beyond Commander website

Static GitHub Pages site for `https://beyond-commander.github.io/`.

## Included pages
- `index.html` — Home
- `features.html` — Features and extras
- `plugins.html` — WCX/WFX/WLX/WDX compatibility and links
- `license.html` — 25 EUR + VAT/user license
- `support.html` — Product support for licensed users

## Key behaviour
- Default language is English; Hungarian and German are selectable and stored in `localStorage`.
- Dark header with light text.
- About menu item is visible but intentionally disabled.
- Linux is active; Windows/macOS/Android are grey with a red “Coming!” badge.
- Beta tester signup: https://github.com/beyond-commander/beyondcmd/wiki/Beta-Testers
- Support email address is linked but never printed as plain text on the page.
- All Beyond Commander mock UI text is English.
- Every mock contains a Linux `~/` panel with Documents, Music, Videos, Templates and sample files.
- Home perspective deck contains light, dark and green BC themes.
- The “Coming soon…” overlay has a light-grey background.
- Home contains “Free download!”.
- No separate download page yet.
- Planned Linux installer formats: AppImage, DEB, RPM.

## Deployment
Copy the contents of this directory to the root of the `beyond-commander.github.io` repository and push. No build step or external dependency is required.

## v2 visual correction
- Hero composition tightened to match the approved mockup.
- “Coming soon! Sign up as a beta tester!” now has a semi-transparent blue background with white text.
- Linux active state is now a green badge.
- Windows/macOS/Android keep grey platform labels with red “Coming!” badges.

## v3 layout correction
- Uses the supplied `bc2.svg` as the website/project logo and favicon.
- Hero BC cards are larger and spread apart in a clearer 3-card perspective.
- Every BC mock uses English menu and command labels.
- Left panel is Linux `~/` with Documents/Music/Pictures/Videos/Templates and sample files.
- Right panel is a Windows path: `C:\Users\User\Documents`.
- Hero CTA buttons use vector symbols.
- Desktop platform names remain on one line; wrapping is enabled only on smaller layouts.
- Windows/macOS/Android stay grey with red Coming badges; Linux uses the green active badge.

## v4 home card correction
- Restored the six icon-led home feature cards to better match the approved visual reference.
- Each of the six cards now includes a blue line icon before the heading.
- Card spacing, padding and proportions were adjusted to resemble the earlier approved mock more closely.

## v6 hotfix
- Rebased on the last syntactically valid v4 build.
- Fixed the JavaScript failure that caused missing header/hero text and blank feature-card captions.
- Added the six home-card translations with safe `Object.assign()` calls.
- Restored the wider desktop composition and larger three-card BC perspective.

## v7 BC mock redesign
- Rebuilt the hero application mock to visually resemble the actual Beyond Commander UI more closely.
- Reversed the perspective stack direction so the cards fan to the left instead of the right.
- Added a BC-like titlebar, menu row, toolbar, device tab row, dual file panels, panel path bars, status/footer strips and F-key row.
- Kept the interface labels in English only, while using the real application layout as the visual reference.

## v8 hero correction
- The three BC cards now cascade downward to the right, so they no longer overlap the left text content.
- The hero app preview was rebuilt again to more closely follow the supplied Beyond Commander screenshot:
  menu row, toolbar, device tabs, dual Linux panels, center tool strip, panel status row, command row and F-key strip.
- The application mock remains English-only on the website.

## v9 stack and density correction
- The three Beyond Commander cards now rise from bottom to top, as requested.
- The dual-panel mock now uses a denser Linux filesystem listing, much closer to the supplied screenshot.
- Both panels show the same Linux home-style view with English-only labels and a denser row layout.

## v10 visibility and density correction
- More of the dark and green themed BC cards are now visible behind the front card.
- The dual-panel file list was made denser again with smaller row heights and more visible entries.
- Both panels still follow the Linux home-style view used as the visual reference.

## v11 critical responsive and hero-view correction
- Rebuilt the hero app stack to follow the supplied visual reference much more closely.
- Front card now shows a mixed Windows/Linux dual-pane view like the reference.
- Themed dark/green cards are clearly visible behind the front window.
- Mobile layout was corrected so the hero does not break and the callout stays horizontal.

## v12 final hero simplification
- Replaced the problematic generated app mock on the home page with the supplied reference perspective image.
- Restored the sign-up callout to blue background with white text.
- Added dedicated mobile rules so the home hero image remains stable and readable on narrow screens.

## v13 size adjustment
- Increased the desktop hero reference image size so it remains visually dominant and does not get lost in the layout.

## v14 approved screenshot alignment
- Tuned the home-page hero layout to the approved screenshot proportions.
- Switched the hero visual to a background-based implementation for more stable responsive behavior.
- Kept the sign-up callout blue with white text.

## v15 BC visual size adjustment
- Increased the desktop hero BC preview size again so the Beyond Commander view becomes more dominant.

## v16 200 percent enlargement
- Increased the desktop hero BC preview much more aggressively, approximately toward a 200% visual emphasis compared with the smaller recent variants.

## v17 hero correction
- Replaced the previous hero artwork with a newly generated all-English static Beyond Commander perspective image.
- Shifted the desktop hero visual 50px to the right.
- Reworked mobile/tablet sizing so the background hero always has an explicit aspect-ratio box and cannot disappear/collapse.
- The blue/white beta sign-up strip is baked into the new static hero visual, so the duplicate HTML overlay is disabled.

## v18 perspective swap
- Replaced the hero visual with a crop based on the latest user-approved perspective screenshot.
- Restored the live blue/white beta sign-up overlay above the static hero image.
- Kept the desktop right shift and mobile-safe aspect-ratio behavior.

## v19 homepage alignment
- Set the hero image visual height to approximately 80% on desktop and added responsive screen-scaling behavior.
- Replaced the platform row with the icon-based appearance from the reference screenshot.
- Added the large plugin/WCL widget to the home page.

## v20 finishing touches
- Restored clear Coming/Active status badges on the home-page platform chips.
- Strengthened the plugin widget background and button presence.
- Improved overall high-resolution scaling with larger wrap widths, typography, cards and hero sizing on large screens.

## v21 left-column scaling fix
- Stretched the left hero column to match the hero area's vertical scale.
- Pushed the platform support block downward so the previous empty gap on large screens is filled.

## v22 left hero scaling and English hero image
- Scaled the entire left hero block on large screens instead of only moving the platform row.
- Removed the 25 EUR + VAT micro-card from the hero.
- Expanded the Free download card to the full two-card width.
- Replaced the hero application image with an all-English static perspective asset.

## v23 layout correction
- Removed the v22 left-column zoom that caused over-scaling and CTA wrapping.
- Kept Beta tester and License order buttons on one row on desktop.
- Made the single Free download card fill the whole former two-card row.
- Reduced the hero track height so the large empty area below the preview disappears.
- Kept progressive high-resolution scaling, but at a much more conservative rate.

## v24 scaling/footer correction
- Reduced high-resolution scaling and constrained it by viewport height, so wide 1440p/4K displays no longer over-enlarge the page.
- Restored and explicitly hardened the dark footer styling.
