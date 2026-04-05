const CACHE_NAME = 'ktl-test-v3';
const ASSETS = [
    '/ktl-test/',
    '/ktl-test/index.html',
    '/ktl-test/css/style.css',
    '/ktl-test/js/app.js',
    '/ktl-test/js/curriculum.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys =>
        Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ));
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    // Don't cache Firebase requests
    if (e.request.url.includes('firebasejs') || e.request.url.includes('googleapis.com/identitytoolkit') || e.request.url.includes('firestore.googleapis.com')) {
        return;
    }

    // Network-first for JS/CSS/HTML (always get latest code)
    if (e.request.url.match(/\.(js|css|html)$/) || e.request.url.endsWith('/ktl-test/')) {
        e.respondWith(
            fetch(e.request).then(resp => {
                if (resp.status === 200) {
                    const clone = resp.clone();
                    caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                }
                return resp;
            }).catch(() => caches.match(e.request))
        );
        return;
    }

    // Cache-first for fonts and icons (rarely change)
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
            if (resp.status === 200) {
                const clone = resp.clone();
                caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
            }
            return resp;
        }))
    );
});
