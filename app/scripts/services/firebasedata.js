'use strict';

/**
 * @ngdoc service
 * @name happytailApp.firebaseData
 * @description
 * # firebaseData
 * Service in the happytailApp.
 */
angular.module('happytailApp')
.factory('Centers', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
  var ref = fbutil.ref('centers').limitToLast(10);
  return $firebaseArray(ref);
}])
.factory('Dogs', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
  var ref = fbutil.ref('dogs').limitToLast(10);
  return $firebaseArray(ref);
}]);
