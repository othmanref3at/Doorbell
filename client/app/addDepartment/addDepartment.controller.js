'use strict';

angular.module('doorbellApp')
  .controller('AddDepartmentCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.Department = new Firebase("https://doorbellyamsafer.firebaseio.com/Departments");
	$scope.AddNewDepartment = function() {
		$scope.Department.child($scope.name).set({
			name: $scope.name
		});
	};

  });
