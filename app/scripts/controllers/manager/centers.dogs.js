'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerCentersDogsCtrl
 * @description
 * # ManagerCentersDogsCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('ManagerCentersDogsCtrl', ['$scope', '$routeParams', 'Fbdata', ManagerCentersDogsCtrl])
.controller('ManagerCentersDogsAddCtrl', ['$scope', '$routeParams', 'Fbdata', ManagerCentersDogsAddCtrl]);

function ManagerCentersDogsCtrl($scope, $routeParams, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';
  $scope.list = Fbdata.centerDog($routeParams.centerId);

}
function ManagerCentersDogsAddCtrl($scope, $routeParams, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';
  $scope.add = function(data) {
    Fbdata.centerDog($routeParams.centerId).$add(data);
  };
}
