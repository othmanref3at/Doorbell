'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addDepartment', {
        url: '/addDepartment',
        templateUrl: 'app/addDepartment/addDepartment.html',
        controller: 'AddDepartmentCtrl'
      });
  });