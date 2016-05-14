'use strict';

describe('Service: user/user', function () {

  // load the service's module
  beforeEach(module('autoApp'));

  // instantiate service
  var user/user;
  beforeEach(inject(function (_user/user_) {
    user/user = _user/user_;
  }));

  it('should do something', function () {
    expect(!!user/user).toBe(true);
  });

});
