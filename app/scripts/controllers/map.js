'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('MapCtrl', function ($scope) {

  $scope.common.navbar = '/templates/navbar.map.html';
  $scope.common.side = '/templates/side.main.html';
  $scope.common.header = false;

  $scope.map = {
    center: {
      latitude: 37.5157756,
      longitude: 127.0339472
    },
    level: 5,
    draggable: true,
    mapTypeId: daum.maps.MapTypeId.ROADMAP,
  };

  $scope.event = function(test) {
    console.log(test);
  };

  $scope.orig = {
    position: {
      latitude: 37.5157756,
      longitude: 127.0339472
    },
    label: 'Origin'
  };

  $scope.dest = {
    position: {
      latitude: 37.5147756,
      longitude: 127.0229472
    },
    label: 'Destination'
  };

});
