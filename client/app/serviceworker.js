 this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(
        '/',
        '/subscription.js',
        '/subscription.jade',
        '/subscription.css',
        '/subscription.controller.js'
        
      );
    })
  );
});

this.addEventListener('fetch', function(event) {
  var response;
  var cachedResponse = caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(response) {
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });  
    return response.clone();
  }).catch(function() {
    return caches.match('/sw-test/gallery/myLittleVader.jpg');
  });
});