'use strict';

describe('Controller: SubscriptionCtrl', function () {

  // load the controller's module
  beforeEach(module('doorbellApp'));

  var SubscriptionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubscriptionCtrl = $controller('SubscriptionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
