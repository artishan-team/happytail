'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
