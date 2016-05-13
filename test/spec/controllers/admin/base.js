'use strict';

describe('Controller: AdminBaseCtrl', function () {

  // load the controller's module
  beforeEach(module('autoApp'));

  var AdminBaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminBaseCtrl = $controller('AdminBaseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminBaseCtrl.awesomeThings.length).toBe(3);
  });
});
