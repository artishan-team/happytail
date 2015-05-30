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
        templateUrl: 'views/login.html',
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
        templateUrl: 'views/manager/event/.istory.html',
        controller: 'ManagerEventHistoryCtrl'
      })
      .when('/manager/{memeberId}/history', {
        templateUrl: 'views/manager/history.my.html',
        controller: 'ManagerMyHistoryCtrl'
      })
      .when('/manager/{memeberId}/center', {
        templateUrl: 'views/manager/center.my.html',
        controller: 'ManagerMyCenterCtrl'
      })
      .when('/manager/{memeberId}/event', {
        templateUrl: 'views/manager/event.my.html',
        controller: 'ManagerMyEventCtrl'
      })
      .when('/manager/{memeberId}/dogs', {
        templateUrl: 'views/manager/dogs.my.html',
        controller: 'ManagerMyDogsCtrl'
      })
      .when('/manager/{memeberId}/events', {
        templateUrl: 'views/manager/events.my.html',
        controller: 'ManagerMyEventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
