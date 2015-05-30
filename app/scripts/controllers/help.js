'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('HelpCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
