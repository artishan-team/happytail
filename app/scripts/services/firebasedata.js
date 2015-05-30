'use strict';

/**
 * @ngdoc service
 * @name happytailApp.firebaseData
 * @description
 * # firebaseData
 * Service in the happytailApp.
 */
angular.module('happytailApp')
.factory('Fbdata', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
  var shared = {};
  shared.center = function(){
    var ref = fbutil.ref('center');
    return $firebaseArray(ref);
  };
  shared.user = function(){
    var ref = fbutil.ref('user');
    return $firebaseArray(ref);
  };
  shared.centerDog = function(centerId){
    var ref = fbutil.ref('center-dog/' + centerId);
    return $firebaseArray(ref);
  };
  shared.event = function(){
    var ref = fbutil.ref('event');
    return $firebaseArray(ref);
  };
  shared.eventJoin = function(eventId){
    var ref = fbutil.ref('event-join/' + eventId);
    return $firebaseArray(ref);
  };
  shared.walk = function(){
    var ref = fbutil.ref('walk');
    return $firebaseArray(ref);
  };
  shared.donation = function(){
    var ref = fbutil.ref('donation');
    return $firebaseArray(ref);
  };
  shared.donation = function(){
    var ref = fbutil.ref('adoption');
    return $firebaseArray(ref);
  };
  return shared;
}]);
