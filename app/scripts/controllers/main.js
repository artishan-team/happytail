'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('MainCtrl', function ($scope) {
    $scope.common.navbar = '/templates/navbar.main.html';
    $scope.common.side = '/templates/side.main.html';
  });
