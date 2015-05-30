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
        templateUrl: 'views/page.main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/page.about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/page.login.html',
        controller: 'LoginCtrl'
      })
      .when('/manager', {
        templateUrl: 'views/page.manager.html',
        controller: 'ManagerCtrl'
      })
      .when('/manager/centers', {
        templateUrl: 'views/manager/centers.html',
        controller: 'ManagerCentersCtrl'
      })
      .when('/manager/centers/add', {
        templateUrl: 'views/manager/centers.add.html',
        controller: 'ManagerCentersAddCtrl'
      })
      .when('/manager/centers/:centerId', {
        templateUrl: 'views/manager/center.detail.html',
        controller: 'ManagerCenterDetailCtrl'
      })
      .when('/manager/centers/:centerId/dogs', {
        templateUrl: 'views/manager/dogs.html',
        controller: 'ManagerCentersDogsCtrl'
      })
      .when('/manager/centers/:centerId/dogs/add', {
        templateUrl: 'views/manager/dogs.add.html',
        controller: 'ManagerCentersDogsAddCtrl'
      })
      .when('/manager/event', {
        templateUrl: 'views/manager/event.html',
        controller: 'ManagerEventCtrl'
      })
      .when('/manager/event/history', {
        templateUrl: 'views/manager/event/.istory.html',
        controller: 'ManagerEventHistoryCtrl'
      })
      .when('/manager/centers/:centerId/history', {
        templateUrl: 'views/manager/history.my.html',
        controller: 'ManagerMyHistoryCtrl'
      })
      .when('/manager/:centerId/event', {
        templateUrl: 'views/manager/event.my.html',
        controller: 'ManagerMyEventCtrl'
      })
      .when('/manager/:centerId/dogs', {
        templateUrl: 'views/manager/dogs.my.html',
        controller: 'ManagerMyDogsCtrl'
      })
      .when('/manager/:centerId/dogs/add', {
        templateUrl: 'views/manager/dogs.my.html',
        controller: 'ManagerMyDogsAddCtrl'
      })
      .when('/manager/:centerId/events', {
        templateUrl: 'views/manager/events.my.html',
        controller: 'ManagerMyEventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
