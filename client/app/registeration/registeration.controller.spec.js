// 'use strict';

// describe('Controller: RegisterationCtrl', function () {

//   // load the controller's module
//   beforeEach(module('doorbellApp'));

//   var RegisterationCtrl, scope;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function ($controller, $rootScope) {
//     scope = $rootScope.$new();
//     RegisterationCtrl = $controller('RegisterationCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should ...', function () {
//     expect(1).toEqual(1);
//   });
// });
var app =  angular.module('chatApp', ['firebase']);
 
  app.controller('chatController', ['$scope','Message', function($scope,Message){

      $scope.user="Guest";
 
      $scope.messages= Message.all;

      $scope.inserisci = function(message){
        Message.create(message);
      };
  }]);
 
  app.factory('Message', ['$firebase',
  function($firebase) {
    var ref = new Firebase('https://doorbellyamsafer.firebaseio.com');
    var messages = $firebase(ref.child('messages')).$asArray();

    var Message = {
      all: messages,
      create: function (message) {
        return messages.$add(message);
      },
      get: function (messageId) {
        return $firebase(ref.child('messages').child(messageId)).$asObject();
      },
      delete: function (message) {
        return messages.$remove(message);
      }
    };

    return Message;

  }
  ]);