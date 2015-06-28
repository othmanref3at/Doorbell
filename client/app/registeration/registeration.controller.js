'use strict';

//create our angular module and anject firebase 
angular.module('doorbellApp')

//create our main controller and get access to firebase
.controller('RegisterationCtrl', function($rootScope, $firebase, $scope) {



	//add user data to firebase DB
	var ref = new Firebase("https://doorbellapp.firebaseio.com/EMPLOYEE");

	$scope.name = "firasfiras";
	$scope.phone = "009992222222";
	$scope.email = "walaa@yamsafer.me";
	$scope.token = "anytoken";
	// ref.child($scope.name).set({
	// 		email: $scope.email,
	// 		name: $scope.name,
	// 		phone: $scope.phone,
	// 		token: $scope.token
	// 	});
	// ref.child('2').set({
	// 		email: $scope.email,
	// 		name: $scope.name,
	// 		phone: $scope.phone,
	// 		token: $scope.token
	// 	});


	$scope.add = function() {

			var uid = ref.child($scope.phone).set({
				email: $scope.email,
				name: $scope.name,
				phone: $scope.phone,
				token: $scope.token
			});
		}
		// 	//retrive auto generated key ...
		// 	// var ID = uid.key();
		// 	// console.log(ID);
		// 	//Firebase userRef = ref.child('Test1');
		// 	//ref.child('ID').setValue(455665);
		// 	//var empkey = uid.child(ID).setValue(45698778998752236541200);


	// 	//to make input feild empty after add its input to DB
	// 	// $scope.name = "";
	// 	// $scope.phone = "";
	// 	// $scope.email = "";
	// };
	// // var ref = new Firebase("https://doorbellapp.firebaseio.com/newTest1/ayeshe/-JstMWKUKC8k2mVqFD8c");

	// // $scope.updateToken = function(){
	// // 	$scope.token="token";
	// // 	var token = ref.update({token:'token3'});
	// // 	//console.log(token);
	// // }
	// $rootScope.currentUser = null;
	// console.log($rootScope.currentUser + "  first");


	// //retrive the last added user data from firebase	
	// // $scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");
	// var ref = new Firebase("https://doorbellapp.firebaseio.com/newTest1/");
	// $scope.retrive = function($locationProvider) {
	// 	var eid = ref.child('ayeshe').orderByValue().limitToLast(1).on('child_added', function(snapshot) {
	// 		//..orderByValue().limitToLast(1)
	// 		$rootScope.currentUser = snapshot.val();
	// 		console.log($rootScope.currentUser);
	// 	});
	// };



});