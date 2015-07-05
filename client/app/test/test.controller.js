'use strict';

//create our angular module and anject firebase 
angular.module('doorbellApp')
 
//create our main controller and get access to firebase
.controller('TestCtrl', function($scope , $location , $firebase) {
    console.log ("hello");
    $scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/Admin");
 
    $scope.login=function(){


                  var email = $scope.email;
                  var passward = $scope.passward;
                   console.log($scope.email);
                   console.log(passward);       
                   
       function(error, authData, $locationProvider) {
        $scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/Admin");

        if (error) {
       
          console.log("Login Failed! ", error);
        } else {

            $location.path('registeration');
            console.log("Authenticated successfully");

        }
          });
                }

  }); 
