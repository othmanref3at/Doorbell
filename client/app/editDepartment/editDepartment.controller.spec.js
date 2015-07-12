'use strict';

describe('Controller: EditDepartmentCtrl', function () {

  // load the controller's module
  beforeEach(module('doorbellApp'));

  var EditDepartmentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditDepartmentCtrl = $controller('EditDepartmentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
