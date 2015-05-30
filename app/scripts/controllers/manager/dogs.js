'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerDogsCtrl
 * @description
 * # ManagerDogsCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('ManagerDogsCtrl', ['$scope', 'Fbdata', ManagerDogsCtrl])
.controller('ManagerDogsAddCtrl', ['$scope', 'Fbdata', ManagerDogsAddCtrl]);

function ManagerDogsCtrl($scope, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.list = Fbdata.centerDog('emeberid');

}
function ManagerDogsAddCtrl($scope, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.add = function(data) {
    Fbdata.centerDog().$add(data);
  };

}
