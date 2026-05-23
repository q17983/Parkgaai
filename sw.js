// ParkGaai Service Worker
const CACHE = 'parkgaai-v2';
const PRECACHE = ['/', '/index.html', '/manifest.json'];

// Install: cache the app shell
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
    );
});

// Activate: remove any old caches
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

// Fetch: serve from cache first for the app shell; network-first for API calls
self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);

    // Always fetch API data fresh from network
    if (url.pathname.startsWith('/api/')) {
        e.respondWith(fetch(e.request));
        return;
    }

    // For everything else: cache first, fall back to network
    e.respondWith(
        caches.match(e.request).then(cached => {
            if (cached) return cached;
            return fetch(e.request).then(res => {
                // Cache successful responses for the app shell
                if (res && res.status === 200) {
                    const clone = res.clone();
                    caches.open(CACHE).then(c => c.put(e.request, clone));
                }
                return res;
            });
        })
    );
});
