'use strict';

describe('Controller: AdminSidenavCtrl', function () {

  // load the controller's module
  beforeEach(module('autoApp'));

  var AdminSidenavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminSidenavCtrl = $controller('AdminSidenavCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminSidenavCtrl.awesomeThings.length).toBe(3);
  });
});
