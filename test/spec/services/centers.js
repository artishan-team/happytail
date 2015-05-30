'use strict';

describe('Service: centers', function () {

  // load the service's module
  beforeEach(module('happytailApp'));

  // instantiate service
  var centers;
  beforeEach(inject(function (_centers_) {
    centers = _centers_;
  }));

  it('should do something', function () {
    expect(!!centers).toBe(true);
  });

});
