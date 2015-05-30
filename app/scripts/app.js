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
    'formly',
    'formlyBootstrap',
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
      .when('/manager/centers/add', {
        templateUrl: 'views/manager/centers.add.html',
        controller: 'ManagerCentersAddCtrl'
      })
      .when('/manager/dogs', {
        templateUrl: 'views/manager/dogs.html',
        controller: 'ManagerDogsCtrl'
      })
      .when('/manager/dogs/add', {
        templateUrl: 'views/manager/dogs.add.html',
        controller: 'ManagerDogsAddCtrl'
      })
      .when('/manager/event', {
        templateUrl: 'views/manager/event.html',
        controller: 'ManagerEventCtrl'
      })
      .when('/manager/event/history', {
        templateUrl: 'views/manager/event/history.html',
        controller: 'ManagerEventHistoryCtrl'
      })
      .when('/manager/my/history', {
        templateUrl: 'views/manager/my/history.html',
        controller: 'ManagerMyHistoryCtrl'
      })
      .when('/manager/my/center', {
        templateUrl: 'views/manager/my/center.html',
        controller: 'ManagerMyCenterCtrl'
      })
      .when('/manager/my/event', {
        templateUrl: 'views/manager/my/event.html',
        controller: 'ManagerMyEventCtrl'
      })
      .when('/manager/my/dogs', {
        templateUrl: 'views/manager/my/dogs.html',
        controller: 'ManagerMyDogsCtrl'
      })
      .when('/manager/my/events', {
        templateUrl: 'views/manager/my/events.html',
        controller: 'ManagerMyEventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
