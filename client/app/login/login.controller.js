'use strict';

var app = angular.module('doorbellApp')
app.controller('LoginCtrl', function($scope, $location, $window) {
    $scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/Admin");
    $scope.login = function() {

        var email = $scope.email;
        var passward = $scope.passward;

        if (email.includes("@yamsafer.me")) {
            $scope.ref.authWithPassword({
                "email": email,
                "password": passward

            }, function(error, authData, $locationProvider) {
                if (error) {
                    console.log("Login Failed! ", error);
                } else {
                    $window.location.href = 'mainpage';

                }
            });
        }
    }

});