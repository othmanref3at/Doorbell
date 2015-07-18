'use strict';

var app = angular.module('doorbellApp')
app.controller('HomepageCtrl', function($scope, $timeout) {
	$scope.slides = [{
		image: '/./../assets/images/image01.jpg',
		description: 'Image 01'
	}, {
		image: '/./../assets/images/image02.jpg',
		description: 'Image 02'
	}, {
		image: '/./../assets/images/image03.jpg',
		description: 'Image 03'
	},
	{
		image: '/./../assets/images/yamimage.png',
		description: 'Image 04'
	}];

	$scope.direction = 'left';
	$scope.currentIndex = 0;
	

	// invoke next slide function every 3 second
	var timer;
	var sliderFunc = function() {
		timer = $timeout(function() {
			$scope.nextSlide();
			timer = $timeout(sliderFunc, 3000);
		}, 3000);
	};

	sliderFunc();

	$scope.$on('$destroy', function() {
		$timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
	});

	//---------- end of time out 
	$scope.setCurrentSlideIndex = function(index) {
		$scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
		$scope.currentIndex = index;
	};

	$scope.isCurrentSlideIndex = function(index) {
		return $scope.currentIndex === index;
	};

	$scope.prevSlide = function() {
		$scope.direction = 'left';
		$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
	};

	$scope.nextSlide = function() {
		$scope.direction = 'right';
		$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
	};
});
