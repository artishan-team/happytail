'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerEventCtrl
 * @description
 * # ManagerEventCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('ManagerEventCtrl', ['$scope', 'Dog', ManagerEventCtrl]);


function ManagerEventCtrl($scope, Dog) {
  $scope.common.navbar = '/templates/navbar.map.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.list = Dog;
  $scope.addMessage = function(newMessage) {
    if( newMessage ) {
      Dog.$add({text: newMessage});
    }
  };

}
