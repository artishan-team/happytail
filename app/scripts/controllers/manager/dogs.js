'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerDogsCtrl
 * @description
 * # ManagerDogsCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('ManagerDogsCtrl', ['$scope', 'Dog', ManagerDogsCtrl])
.controller('ManagerDogsAddCtrl', ['$scope', 'Dog', ManagerDogsAddCtrl]);

function ManagerDogsCtrl($scope, Dog) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.list = Dog;

}
function ManagerDogsAddCtrl($scope, Dog) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.add = function(data) {
    Dog.dogs().$add(data);
  };

}
