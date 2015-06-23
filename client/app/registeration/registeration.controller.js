'use strict';

// angular.module('doorbellApp')
//   .controller('RegisterationCtrl', function ($scope, $firebase) {
//     $scope.message = 'Hello';


//     //connect to firebase
//  var ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");  
//  $scope.emplyee = $firebase(ref);


//  $scope.add = function(){
//  	console.log("clicked !");
//  $scope.emplyee.$add({
//      name : $scope.name,
//      email : $scope.email,
//      phoneNumber : $scope.phone
//  });

//  }



//   }); 

//create our angular module and anject firebase 
angular.module('doorbellApp')

//create our main controller and get access to firebase
.controller('RegisterationCtrl', function($scope, $firebase,$rootScope) {

	//var emplyee = "";

	//connect to firebase
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
	

	 //retrive the last added user data from firebase	
	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee/email");
     
	$scope.retrive=function(){
		$scope.ref.orderByValue().limitToLast(2).on('value',function(snapshot) {
			
			$rootScope.currentUser = snapshot.val();
			
			console.log($rootScope.currentUser);
			//return currentUser;

		});
		
	};

    //$http.get("https://doorbellyamsafer.firebaseio.com/emplyee")
    //.success(function(response) {$scope.names = response.emplyee;});
    //console.log($scope.names);


});