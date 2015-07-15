'use strict';

//create our angular module and anject firebase 
var app = angular.module('doorbellApp')

app.controller('RegisterationCtrl', function($firebase, $scope, $auth, $cookies, $location, $cookieStore) {
    $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
        console.log($auth.authenticate(provider));
    };

    var mycookie = "";

    //define data needed in the firebase 
    $scope.name;
    $scope.phone;
    $scope.email;
    $scope.token = "no token";


    //encode email to be the key for DB..............
    var forbiddenChars = '.$[]#/'; //contains the forbidden characters
    escape(forbiddenChars); //results in ".%24%5B%5D%23/"
    encodeURI(forbiddenChars); //results in ".%24%5B%5D%23%2F"
    encodeURIComponent(forbiddenChars); //results in ".%24%5B%5D%23%2F"


    //main function which add emplyee to the DB
    $scope.main = function() {
        //add employee info to DB ..
        var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
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


        // retrive the last added user data from firebase
        var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
        var eid = ref.limitToLast(1).once('child_added', function(snapshot) {
            $scope.currentUser = snapshot.val();
            console.log($scope.currentUser);
        });


        //set cookies
        $cookieStore.put('currentUser', $scope.currentUser.email);
        //retrive cookies
        var mycookie = $cookieStore.get('currentUser');
        console.log(mycookie);
        console.log(typeof(mycookie));
    };

    //redirect to subscription page if there is cookies for user
    if (typeof(mycookie) != 'undefined') {
        $location.path('subscription');
    }

});
