'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerDogsCtrl
 * @description
 * # ManagerDogsCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('ManagerDogsCtrl', ['$scope', 'Centers','Auth', ManagerDogsCtrl]);


function ManagerDogsCtrl($scope, centerList, Auth) {
  $scope.common.navbar = '/templates/navbar.manager.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.authData = Auth.$getAuth();

  $scope.centers = centerList;
  $scope.addMessage = function(newMessage) {
    if( newMessage ) {
      $scope.centers.$add({text: newMessage});
    }
  };

}
