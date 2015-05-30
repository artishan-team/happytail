'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerCtrl
 * @description
 * # ManagerCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('ManagerCtrl', function ($scope) {
    $scope.common.navbar = '/templates/navbar.main.html';
    $scope.common.side = '/templates/side.manager.html';
    $scope.common.header = '/templates/header.manager.html';
  });
