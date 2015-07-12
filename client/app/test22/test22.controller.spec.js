'use strict';

describe('Controller: Test22Ctrl', function () {

  // load the controller's module
  beforeEach(module('doorbellApp'));

  var Test22Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Test22Ctrl = $controller('Test22Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
