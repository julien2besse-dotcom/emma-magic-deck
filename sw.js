const CACHE_NAME = 'emma-deck-v2';

// Install: skip caching static list (network-first is more reliable for deploys)
self.addEventListener('install', () => self.skipWaiting());

// Activate: clean old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Fetch: network-first, cache fallback
self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;

    e.respondWith(
        fetch(e.request).then(response => {
            if (response.ok) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
            }
            return response;
        }).catch(() => {
            return caches.match(e.request);
        })
    );
});
