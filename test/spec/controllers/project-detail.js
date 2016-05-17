'use strict';

describe('Controller: ProjectDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('autoApp'));

  var ProjectDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectDetailCtrl = $controller('ProjectDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectDetailCtrl.awesomeThings.length).toBe(3);
  });
});
