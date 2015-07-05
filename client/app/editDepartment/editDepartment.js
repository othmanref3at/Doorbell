'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editDepartment', {
        url: '/editDepartment',
        templateUrl: 'app/editDepartment/editDepartment.html',
        controller: 'EditDepartmentCtrl'
      });
  });