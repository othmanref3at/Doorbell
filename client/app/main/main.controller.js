'use strict';

angular.module('doorbellApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.name = 'walaa';
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
