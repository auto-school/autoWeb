'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:AdminSidenavCtrl
 * @description
 * # AdminSidenavCtrl
 * Controller of the autoApp
 */

angular.module('autoApp')
  .controller('AdminSidenavCtrl', function ($scope, $mdSidenav) {
    $scope.index = 0;

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };
  });

