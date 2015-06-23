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
			// $scope.unsubscribe.addEventListener('click',function(e){
			// 	e.preventDefault();
			// 	if(!window.Notification){
			// 		alert('sorry,notification not support');
			// 	}else{
			// 		Notification.requestPermission(function(p){
			// 			console.log(p);
			// 		});
			// 	}
			// });
function notify(e){
	var notifi;
if(Notification.permission === 'default'){
	alert('Please allow notifications before doing this');

}else{
 	notifi= new Notification('New message from the door',{
 		body: 'Please go open the door',
 		icon: './../../assets/images/message.png'

 		 
 	});
 	notifi.onclick = function(){
 		alert("Im comming :P");

 	}
}
}
 // console.log("SW presentddddd !!! ");
 //    if ('serviceWorker' in navigator){
 //    console.log("SW present !!! ");

 //    navigator.serviceWorker.register('worker.js', {
 //      //scope: '/toto/'
 //    }).then(function(registration){
 //      console.log('Service worker registered : ', registration.scope);
 //    })
 //    .catch(function(err){
 //      console.log("Service worker registration failed : ", err);
 //    });

 //  }



// https://example.com/webapp.js
// navigator.serviceWorker.register('./serviceworker.js').then(
//   function(serviceWorkerRegistration) {
//     serviceWorkerRegistration.pushManager.subscribe().then(
//       function(pushSubscription) {
//         console.log(pushSubscription.endpoint);
//         // The push subscription details needed by the application
//         // server are now available, and can be sent to it using,
//         // for example, an XMLHttpRequest.
//       }, function(error) {
//         // During development it often helps to log errors to the
//         // console. In a production environment it might make sense to
//         // also report information about errors back to the
//         // application server.
//         console.log(error);
//       }
//     );
//   }

//   );


	});