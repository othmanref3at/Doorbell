'use strict';

//create our angular module and anject firebase 
angular.module('doorbellApp')

//create our main controller and get access to firebase
.controller('RegisterationCtrl', function($rootScope, $firebase,$scope) {

	

	//add user data to firebase DB
	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");

	$scope.add = function() {
		
		$scope.ref.push({
			name: $scope.name,
			phone: $scope.phone
		
		});
		$scope.ref.set({
			email: $scope.email
		});
		 console.log($scope.name);
		//to make input feild empty after add its input to DB
		$scope.name = "";
		$scope.email = "";
		$scope.phone = "";
		
	};
	console.log($rootScope.currentUser+"first");

	 //retrive the last added user data from firebase	
	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee/email");
     
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