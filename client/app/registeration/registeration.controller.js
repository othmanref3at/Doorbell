'use strict';


//create our angular module and anject firebase 
var app = angular.module('doorbellApp')


app.controller('RegisterationCtrl', function($firebase,$scope, $auth, $cookies, $location, $cookieStore) {

    //login with Google account ----------------------------------------------------------------------
    $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
        console.log($auth.authenticate(provider));
    };
    var mycookie = "";
    //add user info to firebase DB
    var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
    // $scope.name = "walaa1221";
    // $scope.phone = "059832222";
    // $scope.email = "walaa11@yamsafer.me";
    // $scope.token = "00";

    $scope.name;
    $scope.phone;
    $scope.email;
    $scope.token = "";


    //encode email to be the key for DB..............
    var forbiddenChars = '.$[]#/'; //contains the forbidden characters
    escape(forbiddenChars); //results in ".%24%5B%5D%23/"
    encodeURI(forbiddenChars); //results in ".%24%5B%5D%23%2F"
    encodeURIComponent(forbiddenChars); //results in ".%24%5B%5D%23%2F"

    //main function
    $scope.main = function() {   
    console.log("tsts");
   if(!$scope.name.includes("@yamsafer.me")){
      document.getElementById('submit').innerHTML = "First name or Second name should not be empty"; 
        registeration.name.focus();  
         return(false); 

            }else{
                 


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
        //$scope.token = "";
        // retrive the last added user data from firebase
        var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
        var eid = ref.limitToLast(1).once('child_added', function(snapshot) {


            $scope.currentUser = snapshot.val();
            console.log($scope.currentUser);


        });
        //set cookies -----
        $cookieStore.put('currentUser', $scope.currentUser.email);
        //retrive cookies
        var mycookie = $cookieStore.get('currentUser');
        console.log(mycookie);
        console.log(typeof(mycookie));

        //update existing records by inserting token to it--
        var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE/");
        var tokenUpdate = ref.child(encodeURIComponent($scope.currentUser.email).replace('.', '%2E')).update({
            token: 'testUpdated'

        });
}
    };

/*    //redirect to subscription page if there is cookies for user
    if (typeof(mycookie) != 'undefined') {
        $location.path('subscription');
    }*/
  
});
// app.constant("currentUser", {
//     name: "$scope.name",
//     phone: "$scope.phone",
//     email: "$scope.email"
// });
// app.factory('UserService', [function() {
//     return {
//     name:'mycookie'
        
//     };
// }]);