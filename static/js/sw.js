const cacheName = 'static-files-1';
const cachedStatidUrls = [
    '/',
    '/inventoryAdd',
    '/static/css/normalize.css',
    '/static/css/main.css',
    '/static/css/bootstrap.min.css',
    '/static/js/external/jquery.min.js',
    '/static/js/external/popper.min.js',
    '/static/js/external/bootstrap.min.js',
    '/static/js/external/quagga.min.js',
    '/static/js/main.js',
    '/static/js/barcode.js'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(cachedStatidUrls);
            })
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            })
    );
});