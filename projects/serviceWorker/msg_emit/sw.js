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