'use strict';

//create our angular module and anject firebase 
var app = angular.module('doorbellApp')

//create our main controller and get access to firebase

app.controller('RegisterationCtrl', function($firebase, $scope, $auth, $cookies, $location, $cookieStore) {

	//login with Google account ----------------------------------------------------------------------
	$scope.authenticate = function(provider) {
		$auth.authenticate(provider);
		console.log($auth.authenticate(provider));
	};

	//add user info to firebase DB
	var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
	$scope.name = "test";
	$scope.phone = "0598308707";
	$scope.email = "walaa@yamsafer.me";
	$scope.token = "anytoken";
	// $scope.name;
	// 	$scope.phone;
	// $scope.email;
	// $scope.token = "";

	var forbiddenChars = '.$[]#/'; //contains the forbidden characters
	escape(forbiddenChars); //results in ".%24%5B%5D%23/"
	encodeURI(forbiddenChars); //results in ".%24%5B%5D%23%2F"
	encodeURIComponent(forbiddenChars); //results in ".%24%5B%5D%23%2F"
	$scope.add = function() {

			var uid = ref.child(encodeURIComponent($scope.email).replace('.', '%2E')).set({
				email: $scope.email,
				name: $scope.name,
				phone: $scope.phone,
				token: $scope.token
			});
			//to make input feild empty after add its input to DB
			$scope.name = "";
			$scope.phone = "";
			$scope.email = "";
			$scope.token = "";

			$cookieStore.put($scope.email, $scope.name);

		}
		// retrive the last added user data from firebase	

	var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
	$scope.retrive = function($locationProvider) {
		var eid = ref.limitToLast(1).once('child_added', function(snapshot) {
			//.orderByValue().limitToLast(1)
			$scope.currentUser = snapshot.val();
			console.log($scope.currentUser);



		});
		console.log(typeof($scope.currentUser));
		//$location.path('subscription');
	};
	$scope.setCookies = function() {

		//set cookies -----
		var coo = $cookieStore.put($scope.email, '$scope.name');
		console.log(coo);
		//retrive cookies
		var mycookie = $cookieStore.get($scope.email);
		console.log(mycookie);
	};



});