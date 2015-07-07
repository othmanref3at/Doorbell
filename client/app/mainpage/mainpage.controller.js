'use strict';

angular.module('doorbellApp')
  .controller('MainpageCtrl', function($firebase, $scope) {

    $scope.test = 'hello';
    $scope.snap = {};

    var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");

    var eid = ref.once('value', function(snapshot) {
      // console.log()
      //.orderByValue().limitToLast(1)
      $scope.snap = snapshot.val();
      //console.log($scope.currentEmployee);
      $scope.$digest();
    });

$scope.Defult = new Firebase("https://doorbellyamsafer.firebaseio.com//Defult");  

$scope.addToDefult = function(idname , idToken){
$scope.Defult.push({
    name :idname,
    token:idToken

});

}

$scope.Interview = new Firebase("https://doorbellyamsafer.firebaseio.com//Interview");  

$scope.addToInterview = function(idname , idToken){
$scope.Interview.push({
   
   name :idname,
    token:idToken
});


    }
  });