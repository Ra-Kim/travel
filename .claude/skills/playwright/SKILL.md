---
name: playwright
description: Screenshot and check this React app in a real browser with Playwright. Use when the user wants to see what the app looks like, verify a UI change, or catch console errors and broken images.
---

# Playwright in this environment

Chromium is preinstalled at `/opt/pw-browsers` (`PLAYWRIGHT_BROWSERS_PATH` is set).
Never run `playwright install`.

1. Build and serve: `CI=true npx react-scripts build`, then
   `python3 -m http.server 5055 -d build` in the background.
2. In the scratchpad, `npm i playwright-core` and launch with
   `chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })`.
3. Take full-page screenshots at desktop (1280×800) and mobile (390×844).
   Log `console` errors, failed requests, and each `<img>`'s `naturalWidth`
   (0 means the image failed to load).
4. The sandbox may block some external hosts (image CDNs, Google Fonts). A
   blocked request here isn't proof that it fails in production.
5. Stop the server when you're done.
