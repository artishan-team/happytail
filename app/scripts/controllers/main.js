'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('MainCtrl', function ($scope, $firebaseObject, $firebaseArray, fbutil) {
    $scope.common.navbar = '/templates/navbar.main.html';
    $scope.common.side = false;
    $scope.common.header = false;


    var profile = $firebaseObject(fbutil.ref('user', 'simplelogin:4'));
    // console.log(fbutil.ref('user', 'simplelogin:4'));
    // profile.$bindTo($scope, 'profile');
    console.log(profile);

    var profile = $firebaseObject(fbutil.ref('user', 'simplelogin:4'));

  });
