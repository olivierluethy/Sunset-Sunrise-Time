# Solaris — Sunrise &amp; Sunset

A keyless, self-contained web app that shows the **sunrise, sunset, twilight and
golden-hour** times for anywhere on Earth, with a live sky visualisation of the
sun's position, countdowns to the next event, a world-wide daylight comparison,
and sunset/sunrise trip planning with reminders. It installs as a **Progressive
Web App** and works offline.

No API key, no account, no build step.

## Highlights

- **Location** — type-ahead search (OpenStreetMap Nominatim) or one-tap "My location" (device GPS).
- **On-device astronomy** — sunrise, sunset, solar noon, civil/nautical/astronomical twilight, golden &amp; blue hour, live solar altitude and bearing, all computed locally with [SunCalc](https://github.com/mourner/suncalc) — so the core works with **no API key** and **offline**.
- **Live sky** — an animated scene puts the sun where it actually is right now, with an adaptive day → sunset → night → sunrise background.
- **Countdowns** — a live timer to the next sunrise/sunset, plus daylight and night length, and how today compares with yesterday and the year's longest/shortest day.
- **Compare the world** — sunrise/sunset and the current day/golden/night status of several cities side by side.
- **Plan a trip** — pick a destination, get a travel-time estimate, the recommended "leave by" time, the golden-hour window, and nearby viewpoints with directions.
- **Reminders** — get an alarm before sunrise/sunset or a nudge to leave on time.
- **PWA** — installable, mobile-first, light &amp; dark modes.

## Getting started

> **Important — serve it, don't open the file directly.**
> Solaris must be opened from a local web server at **`http://localhost`** (or a
> hosted `https://` URL). If you double-click `index.html` and it opens as a
> `file://…` page, the browser treats it as an insecure origin and **disables the
> manifest, service worker, geolocation, notifications and location search** — you
> will see `CORS`/`origin 'null'` errors. Use one of the options below instead.

You only need a static file server. Pick whichever matches what you already have.

### Option A — Python (usually pre-installed on Linux &amp; macOS)

**Linux / macOS** (Terminal):

```bash
cd path/to/Sunset-Sunrise-Time
python3 -m http.server 8000
```

**Windows** (PowerShell or Command Prompt):

```powershell
cd path\to\Sunset-Sunrise-Time
py -m http.server 8000
```

> If `py` is not found on Windows, try `python -m http.server 8000`.

Then open **http://localhost:8000/** in your browser.

### Option B — Node.js (any OS: Windows, Linux, macOS)

```bash
cd path/to/Sunset-Sunrise-Time
npx serve .
```

`npx` prints a local URL (e.g. `http://localhost:3000`) — open it. No global install
needed; `npx` fetches `serve` on first use.

### Option C — VS Code (any OS, no terminal)

1. Install the **Live Server** extension.
2. Right-click `index.html` → **"Open with Live Server"**.

### Stopping the server

Press **`Ctrl + C`** in the terminal running it.

## Deploy (optional)

Because it is a static folder with no build step, you can host it anywhere:

- **Netlify** — drag the folder onto <https://app.netlify.com/drop>.
- **Cloudflare Pages** or **GitHub Pages** — point them at this repo (GitHub Pages on a
  private repo requires a paid plan, or make the repo public).

Any of these gives an `https://` URL where install, geolocation and reminders all work.

## Tech

Single-page app built with **React** (via CDN + [htm](https://github.com/developit/htm), no build tooling) and **Tailwind CSS**. Astronomy, location and planning logic are kept separate from the presentation layer. There is nothing to compile — just serve the folder.

## Notes &amp; limits

- Times for **your own location** use your device's exact timezone; other searched/compared cities use a longitude-based timezone estimate (no timezone API needed), which can differ by up to an hour near DST changes or timezone borders.
- **Reminders** use the browser Notifications API. On browsers with the Notification Triggers API they fire even when Solaris is closed; otherwise they fire while it is open. There is no push backend.
- **Travel time** is a distance-based estimate, not turn-by-turn routing. **Nearby viewpoints** come from OpenStreetMap Overpass and may be unavailable on some networks (the app just shows none).

## Credits

Sun calculations © Vladimir Agafonkin (SunCalc, BSD-2-Clause). Location and
viewpoint data © OpenStreetMap contributors via the Nominatim and Overpass services.
