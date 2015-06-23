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


	});