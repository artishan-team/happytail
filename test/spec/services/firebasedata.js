'use strict';

describe('Service: firebaseData', function () {

  // load the service's module
  beforeEach(module('happytailApp'));

  // instantiate service
  var firebaseData;
  beforeEach(inject(function (_firebaseData_) {
    firebaseData = _firebaseData_;
  }));

  it('should do something', function () {
    expect(!!firebaseData).toBe(true);
  });

});
