'use strict';

describe('Controller: PushnotificationCtrl', function () {

  // load the controller's module
  beforeEach(module('doorbellApp'));

  var PushnotificationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PushnotificationCtrl = $controller('PushnotificationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
