'use strict';

angular.module('doorbellApp')
  .controller('EditDepartmentCtrl', function ($scope, $firebase) {
    //connect to firebase
	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/Defults");
	$scope.ref1 = new Firebase("https://doorbellyamsafer.firebaseio.com/Departments");



$scope.AddDefultEmplyee= function(){
	
		$scope.ref.push({
			DefultEmplyee: $scope.DefultEmplyee,
		});
   console.log($scope.DefultEmplyee);


}

$scope.AddNewEmplyee= function(){
		$scope.ref1.push({
			AddEmplyee: $scope.AddEmplyee,
		});
   console.log($scope.AddEmplyee);


}

});