const CACHE_NAME = 'ktl-test-v10';
const ASSETS = [
    '/ktl-test/',
    '/ktl-test/index.html',
    '/ktl-test/css/style.css',
    '/ktl-test/js/app.js?v=10',
    '/ktl-test/js/curriculum.js?v=10',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', function(e) {
    e.waitUntil(caches.open(CACHE_NAME).then(function(c) { return c.addAll(ASSETS); }));
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); }));
        }).then(function() {
            return self.clients.claim();
        }).then(function() {
            return self.clients.matchAll({type: 'window'});
        }).then(function(clients) {
            clients.forEach(function(client) {
                client.navigate(client.url);
            });
        })
    );
});

self.addEventListener('fetch', function(e) {
    if (e.request.url.includes('firebasejs') || e.request.url.includes('googleapis.com/identitytoolkit') || e.request.url.includes('firestore.googleapis.com')) {
        return;
    }

    // Network-first for JS/CSS/HTML
    if (e.request.url.match(/\.(js|css|html)(\?.*)?$/) || e.request.url.endsWith('/ktl-test/')) {
        e.respondWith(
            fetch(e.request).then(function(resp) {
                if (resp.status === 200) {
                    var clone = resp.clone();
                    caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
                }
                return resp;
            }).catch(function() { return caches.match(e.request); })
        );
        return;
    }

    // Cache-first for fonts and icons
    e.respondWith(
        caches.match(e.request).then(function(cached) {
            return cached || fetch(e.request).then(function(resp) {
                if (resp.status === 200) {
                    var clone = resp.clone();
                    caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
                }
                return resp;
            });
        })
    );
});
