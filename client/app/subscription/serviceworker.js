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
