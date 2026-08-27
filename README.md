# Solaris — Sunrise &amp; Sunset

A keyless, self-contained web app that shows the **sunrise, sunset, twilight and
golden-hour** times for anywhere on Earth, with a live sky visualisation of the
sun's position, countdowns to the next event, and a world-wide daylight
comparison. It installs as a **Progressive Web App** and works offline.

No API key, no account, no build step.

## Highlights

- **Location** — type-ahead search (OpenStreetMap Nominatim) or one-tap "My location" (device GPS).
- **On-device astronomy** — sunrise, sunset, solar noon, civil/nautical/astronomical twilight, golden &amp; blue hour, live solar altitude and bearing, all computed locally with [SunCalc](https://github.com/mourner/suncalc) — so the core works with **no API key** and **offline**.
- **Live sky** — an animated scene puts the sun where it actually is right now, with an adaptive day → sunset → night → sunrise background.
- **Countdowns** — a live timer to the next sunrise/sunset, plus daylight and night length, and how today compares with yesterday and the year's longest/shortest day.
- **Compare the world** — see sunrise/sunset and the current day/golden/night status of several cities side by side.
- **PWA** — installable, mobile-first, light &amp; dark modes.

## Tech

Single-page app built with **React** (via CDN + [htm](https://github.com/developit/htm), no build tooling) and **Tailwind CSS**. Astronomy and location logic are kept separate from the presentation layer. Just open `index.html` (or serve the folder) — there is nothing to compile.

## Run locally

Serve the folder with any static server, e.g.:

```bash
npx serve .
# or
python3 -m http.server
```

Then open the printed URL. Geolocation and service-worker install require `https://` or `localhost`.

## Credits

Sun calculations © Vladimir Agafonkin (SunCalc, BSD-2-Clause). Location data ©
OpenStreetMap contributors via the Nominatim service.
