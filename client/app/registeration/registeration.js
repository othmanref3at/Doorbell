'use strict';

angular.module('doorbellApp')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('registeration', {
        url: '/registeration',
        templateUrl: 'app/registeration/registeration.html',
        controller: 'RegisterationCtrl'
      });
  }]);