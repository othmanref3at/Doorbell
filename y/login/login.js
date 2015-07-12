'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: 'y',
        templateUrl: '../y/login/login.html',
        controller: 'LoginCtrl'
      });
  });