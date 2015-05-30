'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerCentersCtrl
 * @description
 * # ManagerCentersCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('ManagerCentersCtrl', ['$scope', 'Fbdata', ManagerCentersCtrl])
.controller('ManagerCentersAddCtrl', ['$scope', 'Fbdata', ManagerCentersAddCtrl]);

function ManagerCentersCtrl($scope, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.list = Fbdata.center();

  $scope.addMessage = function(newMessage) {
    if( newMessage ) {
      Fbdata.center().$add({text: newMessage});
    }
  };
}

function ManagerCentersAddCtrl($scope, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.formFields = [
  {
    'className': 'row',
    'fieldGroup': [
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'firstName',
        'templateOptions': {
          'label': 'First Name'
        }
      },
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'lastName',
        'templateOptions': {
          'label': 'Last Name'
        },
        'expressionProperties': {
          'templateOptions.disabled': '!model.firstName'
        }
      }
    ]
  },
  {
    'template': '<hr /><div><strong>Address:</strong></div>'
  },
  {
    'className': 'row',
    'fieldGroup': [
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'street',
        'templateOptions': {
          'label': 'Street'
        }
      },
      {
        'className': 'col-xs-3',
        'type': 'input',
        'key': 'cityName',
        'templateOptions': {
          'label': 'City'
        }
      },
      {
        'className': 'col-xs-3',
        'type': 'input',
        'key': 'zip',
        'templateOptions': {
          'type': 'number',
          'label': 'Zip',
          'max': 99999,
          'min': 0,
          'pattern': '\\d{5}'
        }
      }
    ]
  },
  {
    'template': '<hr />'
  },
  {
    'type': 'input',
    'key': 'otherInput',
    'templateOptions': {
      'label': 'Other Input'
    }
  },
  {
    'type': 'checkbox',
    'key': 'otherToo',
    'templateOptions': {
      'label': 'Other Checkbox'
    }
  }
];

  $scope.add = function(item) {
    console.log(item);
    // if( newMessage ) {
    console.log(Fbdata.center);
    Fbdata.center().$add(item);
    // }
  };

}
