'use strict';

describe('Service: Locals', function () {

  // load the service's module
  beforeEach(module('autoApp'));

  // instantiate service
  var Locals;
  beforeEach(inject(function (_Locals_) {
    Locals = _Locals_;
  }));

  it('should do something', function () {
    expect(!!Locals).toBe(true);
  });

});
