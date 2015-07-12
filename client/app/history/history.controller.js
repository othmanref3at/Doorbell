'use strict';

angular.module('doorbellApp')
  .controller('HistoryCtrl', function ($scope) {
    $scope.message = 'Hello';

var ref = new Firebase("https://doorbellyamsafer.firebaseio.com/DataVistor/History");

    var eid = ref.once('value', function(snapshot) {
      // console.log()
      //.orderByValue().limitToLast(1)
      $scope.snap = snapshot.val();
      //console.log($scope.currentEmployee);
      $scope.$digest();
    });


    
  });
