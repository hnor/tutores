'use strict';

describe('Controller: UsuariosCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UsuariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosCtrl = $controller('UsuariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariosCtrl.awesomeThings.length).toBe(3);
  });
});
