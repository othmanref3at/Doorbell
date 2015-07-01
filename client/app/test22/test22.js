'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('test22', {
        url: '/test22',
        templateUrl: 'app/test22/test22.html',
        controller: 'Test22Ctrl'
      });
  });