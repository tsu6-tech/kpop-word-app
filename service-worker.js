self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('kpop-words-v1').then(cache => {
      return cache.addAll(['index.html', 'manifest.json', 'icon.png']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
