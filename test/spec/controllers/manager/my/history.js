'use strict';

describe('Controller: ManagerMyHistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('happytailApp'));

  var ManagerMyHistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerMyHistoryCtrl = $controller('ManagerMyHistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
