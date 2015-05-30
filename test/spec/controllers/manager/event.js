'use strict';

describe('Controller: ManagerEventCtrl', function () {

  // load the controller's module
  beforeEach(module('happytailApp'));

  var ManagerEventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerEventCtrl = $controller('ManagerEventCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
