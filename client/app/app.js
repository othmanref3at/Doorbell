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

   // $urlRouterProvider.otherwise('/registration');

});

app.run(function($rootScope, $state,$location) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        
        if ((typeof($rootScope.currentUser)) === 'undefined') {
            
            console.log("currentUser  undefined yet ");
            $location.path('subscription');

        } else {
            console.log("currentUser defined");
           
            
            $location.path('subscription');
            console.log($rootScope.currentUser);
        }
    
           
    });
}); 
