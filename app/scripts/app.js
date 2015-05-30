'use strict';

/**
 * @ngdoc overview
 * @name happytailApp
 * @description
 * # happytailApp
 *
 * Main module of the application.
 */
angular
  .module('happytailApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.bootstrap',
    'ht.config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/manager', {
        templateUrl: 'views/manager.html',
        controller: 'ManagerCtrl'
      })
      .when('/manager/centers', {
        templateUrl: 'views/manager/centers.html',
        controller: 'ManagerCentersCtrl'
      })
      .when('/managers]/dogs', {
        templateUrl: 'views/managers]/dogs.html',
        controller: 'ManagersDogsCtrl'
      })
      .when('/manager/centers', {
        templateUrl: 'views/manager/centers.html',
        controller: 'ManagerCentersCtrl'
      })
      .when('/manager/dogs', {
        templateUrl: 'views/manager/dogs.html',
        controller: 'ManagerDogsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
