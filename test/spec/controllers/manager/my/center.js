'use strict';

describe('Controller: ManagerMyCenterCtrl', function () {

  // load the controller's module
  beforeEach(module('happytailApp'));

  var ManagerMyCenterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerMyCenterCtrl = $controller('ManagerMyCenterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
