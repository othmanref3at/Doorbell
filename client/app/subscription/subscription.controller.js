'use strict';

angular.module('doorbellApp')
	.controller('SubscriptionCtrl', function($scope) {
		$scope.message = 'Hello';

		var isPushEnabled = false;
		var subscribe_change = 0;
		var API_KEY = 'AIzaSyA4a5_4KBa2D4MbAOzt0onlDTFrvbzXM0M';
		var PUSH_SERVER_URL = 'https://console.developers.google.com/project/doorbell-984';


		$scope.checkSubscribe = function(e) {
			// body...

			console.log("subscribe");
			//subscribee();
			// notify(e);
			subscribe_change = 1;
				subscribeDevice();
			console.log("subscribe222");


		}
		$scope.checkUnsubscribe = function(e) {
			// body... 	
			// console.log("unsubscribe");
			// //e.preventDefault();
			// if (!window.Notification) {
			// 	alert('sorry,notification not support');
			// } else {
			// 	Notification.requestPermission(function(p) {
			// 		if (p === 'denied') {
			// 			alert('You have denied notification');
			// 		} else if (p === 'granted') {
			// 			alert('You have granted notification');
			// 		}
			// 	});
			// }
			changesubscrib();
			//unsubscribeDevice();
		}

		// function subscribee() {
		// 	// Disable the button so it can't be changed while
		// 	// we process the permission request

		// 	console.log(navigator);

		// 	navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {

		// 		console.log('qwe');
		// 		serviceWorkerRegistration.pushManager.subscribe({
		// 				userVisibleOnly: true
		// 			})
		// 			.then(console.log("saja"))
		// 			// (function(subscription) {
		// 			// 	// The subscription was successful
		// 			// 	isPushEnabled = true;
		// 			// 	pushButton.textContent = 'Disable Push Messages';
		// 			// 	pushButton.disabled = false;

		// 		// 	// TODO: Send the subscription subscription.endpoint
		// 		// 	// to your server and save it to send a push message
		// 		// 	// at a later date
		// 		// 	return sendSubscriptionToServer(subscription);
		// 		// })
		// 		.catch(function(e) {
		// 			if (Notification.permission === 'denied') {
		// 				// The user denied the notification permission which
		// 				// means we failed to subscribe and the user will need
		// 				// to manually change the notification permission to
		// 				// subscribe to push messages
		// 				window.Demo.debug.log('Permission for Notifications was denied');
		// 				pushButton.disabled = true;
		// 			} else {
		// 				// A problem occurred with the subscription, this can
		// 				// often be down to an issue or lack of the gcm_sender_id
		// 				// and / or gcm_user_visible_only
		// 				window.Demo.debug.log('Unable to subscribe to push.', e);
		// 				pushButton.disabled = false;
		// 				pushButton.textContent = 'Enable Push Messages';
		// 			}
		// 		});
		// 	});
		// }


		// Check that service workers are supported, if so, progressively  
		// enhance and add push messaging support, otherwise continue without it.  

		// if ('serviceWorker' in navigator) {
		// 	navigator.serviceWorker.register(' app/serviceworker.js', {scope: '/app/subscription/'})
		// 		.then(function(r) {
		// 			console.log(r.scope, "kerjglekrjg");
		// 			console.log(navigator.serviceWorker)
		// 		});
		// } else {
		// 	// Service Workers aren't supported so you should hide the push UI
		// 	// If it's currently visible.
		// 	window.PushDemo.ui.showError('service worker not supported');
		// 	window.PushDemo.ui.showOnlyError();
		// }

		// function initialiseState() {

		// 	// Are Notifications supported in the service worker 
		// 	if (!('PushManager' in window)) {
		// 		console.log("notification not supported");

		// 		return;
		// 	}

		// 	// Is the Permissions API supported
		// 	if ('permissions' in navigator) {
		// 		console.log("permission supported")
		// 		console.log(navigator)
		// 			// setUpPushPermission();

		// 		return;



		// 	} else {
		// 		console.log("permission not supported");
		// 		//   setUpNotificationPermission();
		// 	}
		// }

		function notify(e) {
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
		}

		function subscribeDevice() {
  // Disable the switch so it can't be changed while
  // we process permissions 

  // We need the service worker registration to access the push manager
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({ userVisibleOnly: true })
      .then(onPushSubscription)
      .catch(function(e) {
        // Check for a permission prompt issue

        if ('permissions' in navigator) {
          navigator.permissions.query({name: 'push', userVisibleOnly: true})
            .then(function(permissionStatus) {
              console.log('subscribe() Error: Push permission status = ',
                permissionStatus);
              window.PushDemo.ui.setPushChecked(false);
              if (permissionStatus.status === 'denied') {
                // The user blocked the permission prompt
                window.PushDemo.ui.showError('Ooops Notifications are Blocked',
                  'Unfortunately you just permanently blocked notifications. ' +
                  'Please unblock / allow them to switch on push ' +
                  'notifications.');
              } else if (permissionStatus.status === 'prompt') {
                // The user didn't accept the permission prompt
                window.PushDemo.ui.setPushSwitchDisabled(false);
                return;
              } else {
                window.PushDemo.ui.showError('Ooops Push Couldn\'t Register',
                  '<p>When we tried to ' +
                  'get the subscription ID for GCM, something went wrong,' +
                  ' not sure why.</p>' +
                  '<p>Have you defined "gcm_sender_id" and ' +
                  '"gcm_user_visible_only" in the manifest?</p>' +
                  '<p>Error message: ' +
                  e.message +
                  '</p>');
                window.PushDemo.ui.setPushSwitchDisabled(false);
                window.PushDemo.ui.setPushChecked(false);
              }
            }).catch(function(err) {
              window.PushDemo.ui.showError('Ooops Push Couldn\'t Register',
                '<p>When we tried to ' +
                'get the subscription ID for GCM, something went wrong, not ' +
                'sure why.</p>' +
                '<p>Have you defined "gcm_sender_id" and ' +
                '"gcm_user_visible_only" in the manifest?</p>' +
                '<p>Error message: ' +
                err.message +
                '</p>');
              window.PushDemo.ui.setPushSwitchDisabled(false);
              window.PushDemo.ui.setPushChecked(false);
            });
        } else {
          // Use notification permission to do something
          if (Notification.permission === 'denied') {
            window.PushDemo.ui.showError('Ooops Notifications are Blocked',
              'Unfortunately you just permanently blocked notifications. ' +
              'Please unblock / allow them to switch on push notifications.');
            window.PushDemo.ui.setPushSwitchDisabled(true);
          } else {
            window.PushDemo.ui.showError('Ooops Push Couldn\'t Register',
              '<p>When we tried to ' +
              'get the subscription ID for GCM, something went wrong, not ' +
              'sure why.</p>' +
              '<p>Have you defined "gcm_sender_id" and ' +
              '"gcm_user_visible_only" in the manifest?</p>' +
              '<p>Error message: ' +
              e.message +
              '</p>');
            window.PushDemo.ui.setPushSwitchDisabled(false);
          }
          window.PushDemo.ui.setPushChecked(false);
        }
      });
  });
}
 // if ('serviceWorker' in navigator) {

 //    console.log(navigator.serviceWorker.controller);
 //    navigator.serviceWorker.register('http://localhost:9000/app/subscription/service-worker.js', {
 //      scope: './app/'
 //    })
 //    .then(initialiseState);
 //  } else {
 //    // Service Workers aren't supported so you should hide the push UI
 //    // If it's currently visible.
 //   console.log('service worker not supported');
     
 //  }
   if ('serviceWorker' in navigator){
    console.log("SW present !!! ");

    navigator.serviceWorker.register('service-worker.js', {
      scope: './'
    }).then(function(registration){
      console.log('Service worker registered : ', registration.scope);
      console.log(navigator.serviceWorker.controller);
    })
    .catch(function(err){
      console.log("Service worker registration failed : ", err);
    });

  }

  
function initialiseState() {
  // Check if push messaging is supported
  if (!('PushManager' in window)) {
    console.log('Ooops Push Isn\'t Supported',
      'If this isn\'t an expected error please get in touch with ' +
      '<a href="https://twitter.com/gauntface">@gauntface</a> as the ' +
      'demo is probably broken.');
    return;
  }

  // Is the Permissions API supported
  if ('permissions' in navigator) {
    // setUpPushPermission();
    console.log(navigator.serviceWorker.controller);
    console.log("Permissionsnnn");
    return;
  } else {
    // setUpNotificationPermission();
    console.log("not Permissions");
  }
}


	});