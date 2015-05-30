'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('CommonCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
    $scope.common = {
      navbar: false,
      side: false,
      header: false
    };

    $scope.user = {};

    $scope.logout = function() {
      Auth.$unauth();
      $location.path('/login');
    };

  }]);
