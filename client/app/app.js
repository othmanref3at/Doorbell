'use strict';

var app = angular.module('doorbellApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'firebase'
])
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('registration', {
      url: '/registration',
      controller: 'RegisterationCtrl'

    })
    .state('supscribe', {
      url: '/subscription',
      controller: 'RegisterationCtrl'

    })

});

app.run(function($rootScope){
 $rootScope.$on('$stateChangeStart',function(event,toState,toParams){
 //var requirRegister = toState.data.requirRegister;
  if( typeof ($rootScope.currentUser) === 'undefined'){
   //  event.preventDeafult();
   
     }
    
});
});