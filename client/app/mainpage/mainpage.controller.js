'use strict';

angular.module('doorbellApp')
  .controller('MainpageCtrl', function($firebase, $scope , $window) {
 
    $scope.test = 'hello';
    $scope.snap = {};

    //get data from firebase and add it into table
    var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
      var eid = ref.once('value', function(snapshot) {
        $scope.snap = snapshot.val();
        $scope.$digest();
      });

    //add specific emplyee to defult list in firebase (add its name and token)
    $scope.Defult = new Firebase("https://doorbellyamsafer.firebaseio.com//Defult");  
    $scope.addToDefult = function(idname , idToken){
      $scope.Defult.push({
          name :idname,
          token:idToken
      });

    }

    //add specific emplyee to interview list in firebase (name and token only)   
    $scope.Interview = new Firebase("https://doorbellyamsafer.firebaseio.com//Interview");  
    $scope.addToInterview = function(idname , idToken){
      $scope.Interview.push({ 
          name :idname,
          token:idToken
      });
    }


    $scope.logOut=function($locationProvider){
      console.log("ssss");
     $window.location.href = 'login'
    }
  });
 