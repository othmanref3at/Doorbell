'use strict';

//create our angular module and anject firebase 
var app = angular.module('doorbellApp')

app.controller('RegisterationCtrl', function($firebase, $timeout, $scope, $auth, $cookies, $location, $cookieStore) {
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

    $scope.remove = function() {
        $cookies.remove('currentUser');
        console.log("remove done");
        console.log($cookies.get('currentUser'));

    };
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
        $cookies.put('currentUser', $scope.currentUser.email);
        //retrive cookies
        var mycookie = $cookies.get('currentUser');
        console.log(mycookie);
        console.log(typeof(mycookie));

        nextpage();

    };

    // invoke gonext function to go to  subscription page after  3 second from registration
    var timer;
    var nextpage = function() {
        console.log('hello timer');
        timer = $timeout(function() {
            $scope.gonext();
            timer = $timeout(nextpage, 4000);
        }, 4000);
    };
    
    $scope.$on('$destroy', function() {
        $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
    });
    console.log($cookies.get('currentUser'));
    /*redirect to subscription page if there is cookies for user 
    after timeout end when user first regiter*/
    $scope.gonext = function() {
        if (typeof($cookies.get('currentUser')) != 'undefined') {
            $location.path('subscription');
        }
    };

    // redirect to subscription page if there is cookies for user 
    if (typeof($cookies.get('currentUser')) != 'undefined') {
            $location.path('subscription');
        }
});