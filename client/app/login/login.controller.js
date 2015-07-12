'use strict';

var app = angular.module('doorbellApp')
  app.controller('LoginCtrl', function ($scope , $location, $window) {
      console.log ("hello");
    $scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/Admin");

        
    $scope.login=function(){


            var email = $scope.email;
            var passward = $scope.passward;

            if(!email.includes("@yamsafer.me")){
                alert("rererer");

            }else{
             console.log($scope.passward);
            


    $scope.ref.authWithPassword({
  "email" :email,    
  "password" : passward

}, function(error, authData, $locationProvider) {
  if (error) {
 
    console.log("Login Failed! ", error);
  } else {

      console.log("Authenticated successfully");
      $window.location.href = 'mainpage';
    // $location.path('mainpage');
      console.log("Authenticated successfully");

    }

  
});


                } } 

              });
