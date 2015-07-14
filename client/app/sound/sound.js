'use strict';

angular.module('doorbellApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sound', {
        url: '/sound',
        templateUrl: 'app/sound/sound.html',
        controller: 'SoundCtrl'
      });
  });