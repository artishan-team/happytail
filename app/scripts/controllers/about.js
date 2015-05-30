'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
