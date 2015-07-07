'use strict';

angular.module('doorbellApp')
<<<<<<< HEAD
  .controller('MainpageCtrl', function($firebase, $scope) {

    $scope.test = 'hello';
    $scope.snap = {};

    var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");

    var eid = ref.once('value', function(snapshot) {
      // console.log()
      //.orderByValue().limitToLast(1)
      $scope.snap = snapshot.val();
      //console.log($scope.currentEmployee);
      $scope.$digest();
    });

$scope.Defult = new Firebase("https://doorbellyamsafer.firebaseio.com//Defult");  

$scope.addToDefult = function(idname , idToken){
$scope.Defult.push({
    name :idname,
    token:idToken

});

}

$scope.Interview = new Firebase("https://doorbellyamsafer.firebaseio.com//Interview");  

$scope.addToInterview = function(idname , idToken){
$scope.Interview.push({
   
   name :idname,
    token:idToken
});


    }
  });
=======
  .controller('MainpageCtrl', function ($scope) {
    $scope.colours = [{
		name: "Red",
		hex: "#F21B1B"
	}, {
		name: "Blue",
		hex: "#1B66F2"
	}, {
		name: "Green",
		hex: "#07BA16"
	}];
	$scope.colour = "";
});

app.run(function($rootScope) {
	angular.element(document).on("click", function(e) {
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
});

app.directive("dropdown", function($rootScope) {
	return {
		restrict: "E",
		templateUrl: "templates/dropdown.html",
		scope: {
			placeholder: "@",
			list: "=",
			selected: "=",
			property: "@"
		},
		link: function(scope) {
			scope.listVisible = false;
			scope.isPlaceholder = true;

			scope.select = function(item) {
				scope.isPlaceholder = false;
				scope.selected = item;
			};

			scope.isSelected = function(item) {
				return item[scope.property] === scope.selected[scope.property];
			};

			scope.show = function() {
				scope.listVisible = true;
			};

			$rootScope.$on("documentClicked", function(inner, target) {
				console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
				if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
					scope.$apply(function() {
						scope.listVisible = false;
					});
			});

			scope.$watch("selected", function(value) {
				scope.isPlaceholder = scope.selected[scope.property] === undefined;
				scope.display = scope.selected[scope.property];
			});
		}
	}
  });
>>>>>>> c5f388da45ccb059d5090732986fe2a2b53d1763
