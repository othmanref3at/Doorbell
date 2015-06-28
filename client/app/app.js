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

app.run(function($rootScope, $state, $location) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

        if ((typeof($rootScope.currentUser)) === 'undefined') {
            $location.path('registeration');
            console.log($rootScope.currentUser);

        } else {
            console.log("currentUser defined");


            $location.path('test22');
            console.log($rootScope.currentUser);
        }


    });
}); 
