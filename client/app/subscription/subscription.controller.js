'use strict';

angular.module('doorbellApp')
	.controller('SubscriptionCtrl', function($scope) {
		$scope.message = 'Hello';

		$scope.checkSubscribe = function(e) {
			// body...

			console.log("subscribe");
			notify(e);

		}
		$scope.checkUnsubscribe = function(e) {
			// body... 	
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
		}

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

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/app/subscription/serviceworker.js', {
					scope: '/app/subscription/'
				}).then(function(serviceWorkerRegistration) {
					console.log(serviceWorkerRegistration.pushManager);
					// Check if this service worker supports push
					if (!serviceWorkerRegistration.pushManager) {
						showError('Ooops Push Isn\'t Supported', 'This is most likely ' +
							'down to the current browser doesn\'t have support for push. ' +
							'Try Chrome M41.');
						return;
					}

					// Check if we have permission for push messages already
					serviceWorkerRegistration.pushManager.hasPermission().then(function(pushPermissionStatus) {
						// console.log(pushPermissionStatus);
					});
				})
				.catch(function(err) {
					// console.log("Service worker registration failed : ", err);
				});

		}



		navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
			console.log('walaa', serviceWorkerRegistration);
			// Check if this service worker supports push
			if (!serviceWorkerRegistration.pushManager) {
				showError('Ooops Push Isn\'t Supported', 'This is most likely ' +
					'down to the current browser doesn\'t have support for push. ' +
					'Try Chrome M41.');
				return;
			}

			// Check if we have permission for push messages already
			serviceWorkerRegistration.pushManager.hasPermission().then(
				function(pushPermissionStatus) {
					// Once we have a service worker, and checked permission,
					// enable the buttons
					var buttonContainer = document.querySelector('.button-container');
					buttonContainer.style.display = 'block';

					// If we don't have permission then set the UI accordingly
					if (pushPermissionStatus !== 'granted') {
						changeState(STATE_NOTIFICATION_PERMISSION);
						return;
					}

					// We have permission, so let's update the subscription
					// just to be safe
					serviceWorkerRegistration.pushManager.getSubscription().then(
						function(pushSubscription) {
							// Check if we have an existing pushSubscription
							if (pushSubscription) {
								sendSubscription(pushSubscription);
								changeState(STATE_ALLOW_PUSH_SEND);
							} else {
								changeState(STATE_NOTIFICATION_PERMISSION);
							}
						});
				});
		});

	});