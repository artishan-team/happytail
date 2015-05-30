'use strict';

describe('Controller: ManagerMyEventsCtrl', function () {

  // load the controller's module
  beforeEach(module('happytailApp'));

  var ManagerMyEventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerMyEventsCtrl = $controller('ManagerMyEventsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
