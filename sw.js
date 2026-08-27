// Solaris service worker — offline shell for the core sunrise/sunset experience.
// Astronomy is computed on-device (SunCalc), so once the shell + CDN libs are
// cached the app works with no network and no API key. Geocoding still needs the
// network but degrades gracefully to the last known location.
const CACHE = 'solaris-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
			.then(() => self.clients.claim())
	);
});

// Tapping a sunrise/sunset reminder focuses the app (opens it if closed).
self.addEventListener('notificationclick', (event) => {
	event.notification.close();
	event.waitUntil(
		self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
			for (const c of list) if ('focus' in c) return c.focus();
			if (self.clients.openWindow) return self.clients.openWindow('./index.html');
		})
	);
});

self.addEventListener('fetch', (event) => {
	const req = event.request;
	if (req.method !== 'GET') return;
	const url = new URL(req.url);

	// Never cache geocoding — always want fresh results, and it must fail soft.
	if (url.hostname.endsWith('nominatim.openstreetmap.org')) return;

	// Stale-while-revalidate: serve cache instantly, refresh in the background.
	event.respondWith(
		caches.open(CACHE).then((cache) =>
			cache.match(req).then((cached) => {
				const network = fetch(req)
					.then((res) => {
						if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
						return res;
					})
					.catch(() => cached);
				return cached || network;
			})
		)
	);
});
