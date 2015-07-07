'use strict';
 
var app = angular.module('doorbellApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'firebase',
    'satellizer'
    //'LocalStorageModule'


])
app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
 
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
    //FACEbook
    $authProvider.facebook({
        clientId: '836511759759708'
    });
    //google
    $authProvider.google({
        clientId: '618368509791-of23nn527s4tirt69m8dq4fsfjtvf4fr.apps.googleusercontent.com'
    });
    //configeration
    $authProvider.httpInterceptor = true; // Add Authorization header to HTTP request
    $authProvider.loginOnSignup = true;
    $authProvider.baseUrl = '/' // API Base URL for the paths below.
    $authProvider.loginRedirect = '/';
    $authProvider.logoutRedirect = '/';
    $authProvider.signupRedirect = '/login';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.loginRoute = '/login';
    $authProvider.signupRoute = '/signup';
    $authProvider.tokenRoot = false; // set the token parent element if the token is not the JSON root
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer'; // Local Storage name prefix
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.unlinkMethod = 'get';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.withCredentials = true;
    $authProvider.platform = 'browser'; // or 'mobile'
    $authProvider.storage = 'localStorage'; // or 'sessionStorage'

    // Google popup
    $authProvider.google({
        url: '/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth/',
        redirectUri: window.location.origin + '/subscription' || window.location.protocol + '//' + window.location.host,
        scope: ['profile', 'email'],
        scopePrefix: 'openid',
        scopeDelimiter: ' ',
        requiredUrlParams: ['scope'],
        optionalUrlParams: ['display'],
        display: 'popup',
        type: '2.0',
        popupOptions: {
            width: 580,
            height: 400
        }
    });
    // Facebook
    $authProvider.facebook({
        url: '/auth/facebook',
        authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
        redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host + '/',
        scope: 'email',
        scopeDelimiter: ',',
        requiredUrlParams: ['display', 'scope'],
        display: 'popup',
        type: '2.0',
        popupOptions: {
            width: 481,
            height: 269
        }
    });

 
});
 
