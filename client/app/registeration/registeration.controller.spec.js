'use strict';

describe('Controller: RegisterationCtrl', function () {

  // load the controller's module
  beforeEach(module('doorbellApp'));

  var RegisterationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterationCtrl = $controller('RegisterationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
