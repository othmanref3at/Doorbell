'use strict';
//function to show massege in service worker and push the massege to clints
function showNotification(title, body, icon, data) {
 var notificationOptions = {
   body: body,
   icon: icon,
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
//push the massege function
self.addEventListener('push', function(event) {
 var title = 'Doorbell';
 var message = 'Please open the door';
 var icon = 'message.png'
 return showNotification(title, message, icon);
});
//function click of the notify open the history 
self.addEventListener('notificationclick', function(event) {
 console.log('On notification click: ', event);
 return clients.openWindow("/history");

});