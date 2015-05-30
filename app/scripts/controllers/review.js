'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ReviewCtrl
 * @description
 * # ReviewCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('ReviewCtrl', function ($scope) {
    $scope.common.navbar = '/templates/navbar.main.html';
    $scope.common.side = false;
    $scope.common.header = false;
    
  });
