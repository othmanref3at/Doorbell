'use strict';

describe('Controller: AddDepartmentCtrl', function () {

  // load the controller's module
  beforeEach(module('doorbellApp'));

  var AddDepartmentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddDepartmentCtrl = $controller('AddDepartmentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
