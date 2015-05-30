'use strict';

describe('Controller: ManagerEventHistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('happytailApp'));

  var ManagerEventHistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerEventHistoryCtrl = $controller('ManagerEventHistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
