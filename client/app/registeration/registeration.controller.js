'use strict';

//create our angular module and anject firebase 
angular.module('doorbellApp')

//create our main controller and get access to firebase
.controller('RegisterationCtrl', function($scope, $firebase) {

	//connect to firebase
	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");
	$scope.add = function() {
		$scope.ref.child($scope.phone).set({
			name: $scope.name,
			email: $scope.email,
			phone: $scope.phone

		});
	};


		$scope.retrive=function($locationProvider){
		$scope.ref.orderByValue().limitToLast(2).on('value',function(snapshot) {
			
			$rootScope.currentUser = snapshot.val();
			
			
		});
		console.log($rootScope.currentUser);
			console.log(typeof ($rootScope.currentUser));
			
			if($rootScope.currentUser ==='undefined'){
				console.log("undefined rootScope");
			}else {
				console.log("defined rootScope");
				//$state.go('test22');
			}

			return $rootScope.currentUser;

		
	};
});