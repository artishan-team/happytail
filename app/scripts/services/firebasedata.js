'use strict';

/**
 * @ngdoc service
 * @name happytailApp.firebaseData
 * @description
 * # firebaseData
 * Service in the happytailApp.
 */
angular.module('happytailApp')
.factory('Center', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
  var shared = {};
  var path = 'centers';
  shared.centers = function(){
    var ref = fbutil.ref(path);
    console.log('hi');
    return $firebaseArray(ref);
  };
  shared.users = function(centerId){
    var ref = fbutil.ref(path + '/' + centerId);
    return $firebaseArray(ref);
  };
  return shared;
}])
.factory('Dog', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
  var shared = {};
  var path = 'dogs';
  shared.dogs = function(centerId){
    var ref = fbutil.ref(path + '/' + centerId);
    return $firebaseArray(ref);
  };
  return shared;
}]);
