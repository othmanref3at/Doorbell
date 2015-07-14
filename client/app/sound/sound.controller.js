'use strict';

angular.module('doorbellApp')
  .controller('SoundCtrl', function ($scope) {
    console.log("hello sound");
  var audio =new Audio("http://www.pacdv.com/sounds/voices/open-the-door.wav");
  audio.play();
  });
