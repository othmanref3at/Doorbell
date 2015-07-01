<<<<<<< HEAD
'use strict';

self.addEventListener('install', function(e) {
  console.log('oninstall');
});

self.addEventListener('activate', function(e) {
  console.log('onactivate');
});

self.addEventListener('fetch', function(e) {
  console.log('onfetch:', e);
});

self.addEventListener('push', function(e) {
  console.log("unsubscribe");
                //e.preventDefault();
                if (!window.Notification) {
                    alert('sorry,notification not support');
                } else {
                      Notification.requestPermission(function(p) {
                          if (p === 'denied') {
                              alert('You have denied notification');
                          } else if (p === 'granted') {
                              alert('You have granted notification');
                          }
                      });
                   }
  console.log('Push Event Received');
  var notifi;
      if (Notification.permission === 'default') {
        alert('Please allow notifications before doing this');

      } else {
        notifi = new Notification('New message from the door', {
          body: 'Please go open the door',
          icon: './../../assets/images/message.png'


        });
        notifi.onclick = function() {
          alert("Im comming :P");

        }
      }

});
=======
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
>>>>>>> master
