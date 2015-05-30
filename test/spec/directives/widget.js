'use strict';

describe('Directive: widget', function () {

  // load the directive's module
  beforeEach(module('happytailApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<widget></widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the widget directive');
  }));
});
