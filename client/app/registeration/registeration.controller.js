'use strict';

//create our angular module and anject firebase 
var app = angular.module('doorbellApp')

//create our main controller and get access to firebase
<<<<<<< HEAD

app.controller('RegisterationCtrl', function($firebase, $scope, $cookies , $location) {

    //login with Google account ----------------------------------------------------------------------
    $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
        console.log($auth.authenticate(provider));
    };


    //add user info to firebase DB
    var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
    // $scope.name = "test";
    // $scope.phone = "0598308707";
    // $scope.email = "walaa@yamsafer.me";
    // $scope.token = "anytoken";
    $scope.name;
    $scope.phone;
    $scope.email;
    $scope.token = "";

    var forbiddenChars = '.$[]#/'; //contains the forbidden characters
    escape(forbiddenChars); //results in ".%24%5B%5D%23/"
    encodeURI(forbiddenChars); //results in ".%24%5B%5D%23%2F"
    encodeURIComponent(forbiddenChars); //results in ".%24%5B%5D%23%2F"
    $scope.add = function() {

            var uid = ref.child(encodeURIComponent($scope.email).replace('.', '%2E')).set({
                email: $scope.email,
                name: $scope.name,
                phone: $scope.phone,
                token: $scope.token
            });
            //to make input feild empty after add its input to DB
            $scope.name = "";
            $scope.phone = "";
            $scope.email = "";
            $scope.token = "";


        }
        // retrive the last added user data from firebase    

    var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE");
    $scope.retrive = function($locationProvider) {
        var eid = ref.limitToLast(1).once('child_added', function(snapshot) {
            //.orderByValue().limitToLast(1)
            $scope.currentUser = snapshot.val();
            console.log($scope.currentUser);
        });
        $location.path ('subscription');
    };
    $scope.setCookies = function() {
        //set cookies -----
        $cookies.put($scope.email, $scope.name);

        //retrive cookies
        $scope.mycookie = $cookies.get($scope.email);
        console.log($scope.mycookie);
    };


});
=======
.controller('RegisterationCtrl', function($rootScope, $firebase,$scope) {
 

	//add user data to firebase DB
	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee/");

	$scope.add = function() {
		
		$scope.ref.push({
			name: $scope.name,
			phone: $scope.phone
		
		});
		$scope.ref.set({
			email: $scope.email
		});
		 console.log($scope.name);
		//to make input feild empty after add its input to DB
		$scope.name = "";
		$scope.email = "";
		$scope.phone = "";
		
	};
	console.log($rootScope.currentUser+"first");

	 //retrive the last added user data from firebase	
	//$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee/email");
     
	$scope.retrive=function($locationProvider){
		$scope.ref.orderByValue().limitToLast(2).on('value',function(snapshot) {
			
			$rootScope.currentUser = snapshot.val();
			
			
		});
		console.log($rootScope.currentUser);
			console.log(typeof ($rootScope.currentUser));
			
			if($rootScope.currentUser ==='undefined'){
				console.log("undefined rootScope");
			}else {
				console.log("defined rootScope");
				//$state.go('test22');
			}

			return $rootScope.currentUser;

		
	};
	
 
 }); 
//  

// 'use strict';

// //create our angular module and anject firebase 
// angular.module('doorbellApp')

// //create our main controller and get access to firebase
// .controller('RegisterationCtrl', function($scope, $firebase,$rootScope) {

// 	//var emplyee = "";

// 	//add user data to firebase DB
// 	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");

// 	$scope.add = function() {
		
// 		$scope.ref.push({
// 			name: $scope.name,
// 			phone: $scope.phone
		
// 		});
// 		$scope.ref.set({
// 			email: $scope.email
// 		});
// 		 console.log($scope.name);
// 		//to make input feild empty after add its input to DB
// 		$scope.name = "";
// 		$scope.email = "";
// 		$scope.phone = "";
		
// 	};
	

// 	 //retrive the last added user data from firebase	
// 	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/doorbellyamsafer/emplyee/");
     
// 	$scope.retrive=function(){
// 		$scope.ref.orderByValue().limitToLast(2).on('value',function(snapshot) {
			
// 			$rootScope.currentUser = snapshot.val();
			
// 			console.log($rootScope.currentUser);
// 			console.log(typeof ($rootScope.currentUser));
// 			//return currentUser;

// 		});
		
// 	};
// 	//$scope.check=function($rootScope.currentUser){
// 	//	if (typeof $rootScope.currentUser === 'undefined')
// 	//		$location.path();
// 	//};
//     //$http.get("https://doorbellyamsafer.firebaseio.com/emplyee")
//     //.success(function(response) {$scope.names = response.emplyee;});
//     //console.log($scope.names);
//      // Check that service workers are supported
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('http://localhost:9000/app/registeration/service-worker.js', {
//       scope: '/app/registeration/'
//     })
//     .then(initialiseState);
//   } else {
//     // Service Workers aren't supported so you should hide the push UI
//     // If it's currently visible.
//     window.PushDemo.ui.showError('service worker not supported');
//     window.PushDemo.ui.showOnlyError();
//   }

// /*if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('http://localhost:9000/app/registeration/service-worker.js').then(initialiseState).catch(function(err) {
//     // registration failed 
//     console.log('ServiceWorker registration failed :(');
//     	console.log(err);
//   });
// }*/
// function initialiseState() { 
//   // Are Notifications supported in the service worker 
//    if (!('PushManager' in window)) {
//     console.log("notification not supported");
//     return;
//   }

//   // Is the Permissions API supported
//   if ('permissions' in navigator) {
//     console.log("permission supported")
//        setUpPushPermission();
//     return;
  

   
//   } else {
//     console.log("permission not supported");
//       //   setUpNotificationPermission();
//   }
// }

// function permissionStatusChange(permissionStatus) {
//   console.log('permissionStatusChange = ', permissionStatus);
//   // If the notification permission is denied, it's a permanent block
//   switch (permissionStatus.status) {
//     case 'denied':

//       window.PushDemo.ui.showError('Ooops Push has been Blocked',
//         'Unfortunately the user permanently blocked push. Please unblock / ' +
//         'allow them to switch on push notifications.');

//       // Set the state of the push switch
//       window.PushDemo.ui.setPushChecked(false);
//       window.PushDemo.ui.setPushSwitchDisabled(true);
//       break;
//     case 'granted':
//       // Set the state of the push switch

//       window.PushDemo.ui.setPushSwitchDisabled(false);
//       break;
//     case 'prompt':
//     console.log("refat");
//       // window.PushDemo.ui.setPushChecked(false);
//       // window.PushDemo.ui.setPushSwitchDisabled(false);
//       break;
//   }

// }
// function setUpPushPermission() {
//   navigator.permissions.query({name: 'push', userVisibleOnly: true})
//     .then(function(permissionStatus) {
//       // Set the initial state
//       permissionStatusChange(permissionStatus);

//       // Handle Permission State Changes
//       permissionStatus.onchange = function() {
//         permissionStatusChange(this);
//       };

//       // Check if push is supported and what the current state is
//       navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
//         // Let's see if we have a subscription already
//         serviceWorkerRegistration.pushManager.getSubscription()
//           .then(function(subscription) {
//             if (!subscription) {
//               // NOOP
//               console.log('No subscription given');
//               return;
//             }

//             // Set the initial state of the push switch
//             window.PushDemo.ui.setPushChecked(true);

//             // Update the current state with the
//             // subscriptionid and endpoint
//             onPushSubscription(subscription);
//           })
//           .catch(function(e) {
//             console.log('An error occured while calling getSubscription()', e);
//           });
//       });
//     }).catch(function(err) {
//       console.error(err);
//       window.PushDemo.ui.showError('Ooops Unable to check the permission',
//         'Unfortunately the permission for push notifications couldn\'t be ' +
//         'checked. Are you on Chrome 43+?');
//     });
// }


// 		// https://example.com/webapp.js
// 		// navigator.serviceWorker.register('./serviceworker.js').then(
// 		//   function(serviceWorkerRegistration) {
// 		//     serviceWorkerRegistration.pushManager.subscribe().then(
// 		//       function(pushSubscription) {
// 		//         console.log(pushSubscription.endpoint);
// 		//         // The push subscription details needed by the application
// 		//         // server are now available, and can be sent to it using,
// 		//         // for example, an XMLHttpRequest.
// 		//       }, function(error) {
// 		//         // During development it often helps to log errors to the
// 		//         // console. In a production environment it might make sense to
// 		//         // also report information about errors back to the
// 		//         // application server.
// 		//         console.log(error);
// 		//       }
// 		//     );
// 		//   }

// 		//   );

// });  
>>>>>>> master
