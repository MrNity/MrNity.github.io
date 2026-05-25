const CACHE = 'voiceovers-v1';

// Кешируем только картинки
const IMAGE_ORIGINS = [
  'static.nanoka.cc',
  'cdn-zeroluck-gg.b-cdn.net',
  'api.everness.info',
  'static.wikia.nocookie.net',
  'shikimori.io',
  'shikimori.one',
];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Кешируем только GET-запросы картинок с нужных доменов
  const isImage = IMAGE_ORIGINS.some(o => url.hostname.includes(o)) ||
    /\.(webp|png|jpg|jpeg|gif|avif|svg)(\?.*)?$/i.test(url.pathname);

  if (e.request.method !== 'GET' || !isImage) return;

  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(e.request);
      if (cached) return cached;

      try {
        const response = await fetch(e.request);
        if (response.ok) cache.put(e.request, response.clone());
        return response;
      } catch {
        return cached ?? new Response('', { status: 503 });
      }
    })
  );
});