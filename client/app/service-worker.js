 this.addEventListener('install', function(event) {
   event.waitUntil(
     caches.open('v1').then(function(cache) {
       return cache.addAll(
         '/app/',
         '/app/app.css',
         '/app/app.js',
         '/app/service-worker.js',
         '/app/manifest.json',
         '/app/subscription/manifest.json',
         '/app/subscription/subscription.controller.js',
         '/app/subscription/subscription.controller.spec.js',
          '/app/subscription/subscription.js',
         '/app/subscription/subscription.jade',
         '/app/subscription/subscription.css'
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