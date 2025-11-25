const CACHE_NAME = 'retro-clock-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './resources/icon-192.png',
  './resources/icon-512.png',
  './resources/ShareTechMono-Regular.ttf' // Theme font
];

// Install service worker and cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached content if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
