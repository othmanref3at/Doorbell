'use strict';

describe('Controller: SoundCtrl', function () {

  // load the controller's module
  beforeEach(module('doorbellApp'));

  var SoundCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SoundCtrl = $controller('SoundCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
