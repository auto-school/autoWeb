'use strict';

describe('Controller: AdminInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('autoApp'));

  var AdminInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminInfoCtrl = $controller('AdminInfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminInfoCtrl.awesomeThings.length).toBe(3);
  });
});
