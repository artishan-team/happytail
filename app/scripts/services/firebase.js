'use strict';

/**
 * @ngdoc service
 * @name happytailApp.firebase
 * @description
 * # firebase
 * Service in the happytailApp.
 */
angular.module('happytailApp')
.service('firebase', function () {
  // AngularJS will instantiate a singleton by calling "new" on this function
})
.factory('Auth', ['$firebaseAuth', 'fbutil', function($firebaseAuth, fbutil) {
  return $firebaseAuth(fbutil.ref());
}])
.factory('fbutil', ['$window', 'FBURL', '$q', function($window, FBURL, $q) {

     var utils = {
       // convert a node or Firebase style callback to a future
       handler: function(fn, context) {
         return utils.defer(function(def) {
           fn.call(context, function(err, result) {
             if( err !== null ) { def.reject(err); }
             else { def.resolve(result); }
           });
         });
       },

       // abstract the process of creating a future/promise
       defer: function(fn, context) {
         var def = $q.defer();
         fn.call(context, def);
         return def.promise;
       },

       ref: firebaseRef
     };

     return utils;

     function pathRef(args) {
       for (var i = 0; i < args.length; i++) {
         if (angular.isArray(args[i])) {
           args[i] = pathRef(args[i]);
         }
         else if( typeof args[i] !== 'string' ) {
           throw new Error('Argument '+i+' to firebaseRef is not a string: '+args[i]);
         }
       }
       return args.join('/');
     }

     /**
      * Example:
      * <code>
      *    function(firebaseRef) {
        *       var ref = firebaseRef('path/to/data');
        *    }
      * </code>
      *
      * @function
      * @name firebaseRef
      * @param {String|Array...} path relative path to the root folder in Firebase instance
      * @return a Firebase instance
      */
     function firebaseRef(path) {
       var ref = new $window.Firebase(FBURL);
       var args = Array.prototype.slice.call(arguments);
       if( args.length ) {
         ref = ref.child(pathRef(args));
       }
       return ref;
     }
  }]);
