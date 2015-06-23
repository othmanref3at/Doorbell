'use strict';

angular.module('doorbellApp')
  .controller('TestCtrl', function ($scope) {
    $scope.message = 'Hello';


    //check the service worker are support 
    if('serviceWorker' in navigator ){
    	navigator.serviceWorker.register('../app.js',{scope:'./'})
    	.then(console.log("refat"));

    }
    else 
    {
    	window.PushDemo.ui.showError('the service worker not supported');
    	window.PushDemo.showOnlyError();
    }



  });
