'use strict';

// angular.module('doorbellApp')
//   .controller('RegisterationCtrl', function ($scope, $firebase) {
//     $scope.message = 'Hello';


//     //connect to firebase
//  var ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");  
//  $scope.emplyee = $firebase(ref);


//  $scope.add = function(){
//  	console.log("clicked !");
//  $scope.emplyee.$add({
//      name : $scope.name,
//      email : $scope.email,
//      phoneNumber : $scope.phone
//  });

//  }



//   }); 

//create our angular module and anject firebase 
angular.module('doorbellApp')

//create our main controller and get access to firebase
 .controller('RegisterationCtrl', function ($scope , $firebase) {

//connect to firebase
 $scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");  

 $scope.add = function(){
 $scope.ref.push({
     name :$scope.name,
     email: $scope.email,
     phone: $scope.phone

 });

};
});