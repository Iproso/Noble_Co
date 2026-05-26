const CACHE_NAME = 'noble-cache-v2';
const STATIC_ASSETS = ['/', '/offline', '/explore', '/icons/icon-192.svg', '/icons/icon-512.svg', '/icons/icon-512-maskable.svg', '/manifest.json'];

const NEVER_CACHE = ['/account', '/admin', '/api'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))),
    ),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { pathname } = new URL(event.request.url);
  if (NEVER_CACHE.some((p) => pathname.startsWith(p))) {
    return;
  }
  if (pathname.startsWith('/_next/image')) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
      }
      return response;
    })),
  );
});
