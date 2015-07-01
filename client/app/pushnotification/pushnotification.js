'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pushnotification', {
        url: '/',
        templateUrl: 'app/pushnotification/pushnotification.html',
        controller: 'PushnotificationCtrl'
      });
  });