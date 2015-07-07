'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mainpage', {
        url: '/mainpage',
        templateUrl: 'app/mainpage/mainpage.html',
        controller: 'MainpageCtrl'
      });
  });