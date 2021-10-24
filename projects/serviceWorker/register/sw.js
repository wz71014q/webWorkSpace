self.addEventListener('install', (event) => {
  console.log('V1 installing…11', event);

  event.waitUntil(
    caches.open("static-v1").then(cache => cache.add("https://7.url.cn/fudao/pc/bd3fa67732209940a5ca1db12970e41e.png"))
  );
});

self.addEventListener('activate', (event) => {
  console.log('V1 now ready to handle fetches!12');
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  console.log(33333, event.request);
});

self.addEventListener('message', function(event) {
  console.log('event.data: ' + event.data);
  event.waitUntil(
    self.clients.matchAll().then(function (clients) {
      if (!clients || clients.length === 0) {
        return;
      }
      clients.forEach(function (client) {
        client.postMessage(event.data);
      });
    })
  );
});