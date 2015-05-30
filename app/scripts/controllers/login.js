'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('LoginCtrl', ['$scope', 'Auth', '$location', 'fbutil', function($scope, Auth, $location, fbutil) {

  $scope.common.navbar = false;
  $scope.common.side = false;
  $scope.common.header = false;

  $scope.email = null;
  $scope.pass = null;
  $scope.confirm = null;
  $scope.createMode = false;

  $scope.login = function(email, pass) {
    $scope.err = null;
    Auth.$authWithPassword({ email: email, password: pass }, {rememberMe: true})
      .then(function(/* user */) {
        $location.path('/account');
      }, function(err) {
        $scope.err = errMessage(err);
      });
  };

  $scope.createAccount = function() {
    $scope.err = null;
    if( assertValidAccountProps() ) {
      var email = $scope.email;
      var pass = $scope.pass;
      // create user credentials in Firebase auth system
      Auth.$createUser({email: email, password: pass})
        .then(function() {
          // authenticate so we have permission to write to Firebase
          return Auth.$authWithPassword({ email: email, password: pass });
        })
        .then(function(user) {
          // create a user profile in our data store
          var ref = fbutil.ref('user', user.uid);
          return fbutil.handler(function(cb) {
            ref.set({email: email, name: name||firstPartOfEmail(email)}, cb);
          });
        })
        .then(function(/* user */) {
          // redirect to the account page
          $location.path('/account');
        }, function(err) {
          $scope.err = errMessage(err);
        });
    }
  };

  function assertValidAccountProps() {
    if( !$scope.email ) {
      $scope.err = 'Please enter an email address';
    }
    else if( !$scope.pass || !$scope.confirm ) {
      $scope.err = 'Please enter a password';
    }
    else if( $scope.createMode && $scope.pass !== $scope.confirm ) {
      $scope.err = 'Passwords do not match';
    }
    return !$scope.err;
  }

  function errMessage(err) {
    return angular.isObject(err) && err.code? err.code : err + '';
  }

  function firstPartOfEmail(email) {
    return ucfirst(email.substr(0, email.indexOf('@'))||'');
  }

  function ucfirst (str) {
    // inspired by: http://kevin.vanzonneveld.net
    str += '';
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
  }
}]);
