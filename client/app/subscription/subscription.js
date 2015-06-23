'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('subscription', {
        url: '/subscription',
        templateUrl: 'app/subscription/subscription.html',
        controller: 'SubscriptionCtrl'
      });
  });