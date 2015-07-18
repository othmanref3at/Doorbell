'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Homepage', {
        url: '/Homepage',
        templateUrl: 'app/Homepage/Homepage.html',
        controller: 'HomepageCtrl'
      });
  });