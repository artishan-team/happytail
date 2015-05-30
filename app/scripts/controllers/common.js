'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('CommonCtrl', function ($scope) {
    $scope.common = {
      navbar: false,
      side: false,
      header: false
    };
  });
