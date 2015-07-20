'use strict'; 

var YAHOO_WEATHER_API_ENDPOINT = 'https://query.yahooapis.com/' +
 'v1/public/yql?q=select%20*%20from%20weather.forecast%20where%' +
 '20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where' +
 '%20text%3D%22london%2C%20uk%22)&format=json&env=store%3A%2F%2' +
 'Fdatatables.org%2Falltableswithkeys';
var KEY_VALUE_STORE_NAME = 'key-value-store';

var idb;

// avoid opening idb until first call
function getIdb() {
 if (!idb) {
   idb = new IndexDBWrapper('key-value-store', 1, function(db) {
     db.createObjectStore(KEY_VALUE_STORE_NAME);
   });
 }
 return idb;
}

 
  
function showNotification(title, body, icon, data) {


 var notificationOptions = {
   body: body,
   icon:icon,
   tag: 'push-notification',
   data: data
 };
 if (self.registration.showNotification) {
   self.registration.showNotification(title, notificationOptions);
   return;
 } else {
  
   new Notification(title, notificationOptions);
 }
}

self.addEventListener('push', function(event) {
 // Since this is no payload data with the first version
 // of Push notifications, here we'll grab some data from
 // an API and use it to populate a notification
 event.waitUntil(
   fetch(YAHOO_WEATHER_API_ENDPOINT).then(function(response) {
     var notifi;
       notifi= new Notification('New message from the door',{
       body: 'Please go open the door',
       icon: './../../assets/images/message.png'

        
       });
        notifi.onclick = function(){
       alert("Im comming :P");

       }
   }).catch(function(err) {
     console.error('Unable to retrieve data', err);
     
  var title = 'Doorbell';
     var message = 'Please open the door';
     var icon ='message.png'
     return showNotification(title, message,icon);
   })
 );
});

self.addEventListener('notificationclick', function(event) {
 console.log('On notification click: ', event); 
     return clients.openWindow("/history");

});