'use strict';

angular.module('doorbellApp')
  .controller('RegisterationCtrl', function ($scope, $firebase) {
    $scope.message = 'Hello';


    //connect to firebase
 var ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");  
 $scope.emplyee = $firebase(ref);


 $scope.add = function(){
 	console.log("clicked !");
 $scope.emplyee.$add({
     name : $scope.name,
     email : $scope.email,
     phoneNumber : $scope.phone
 });

 }



  });
