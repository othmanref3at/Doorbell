'use strict';

var app = angular.module('doorbellApp')
  app.controller('LoginCtrl', function ($scope , $location) {
      console.log ("hello");
    $scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/Admin");

        
    $scope.login=function(){


            var email = $scope.email;
            var passward = $scope.passward;
             console.log($scope.email);
             console.log(passward);       

    $scope.ref.authWithPassword({
  email    : email,
  password : passward

},

 $scope.log = function(error, authData, $locationProvider) {
  var ref = new Firebase("https://doorbellyamsafer.firebaseio.com/Admin");

  if (error) {
 
    console.log("Login Failed! ", error);
  } else {
    $location.path('mainpage');

      console.log("Authenticated successfully");
    }

  
});


                }  

              });
