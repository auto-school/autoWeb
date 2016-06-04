'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('NavigationCtrl', function ($scope, $rootScope, $state) {

    $scope.user = $rootScope.user;
    console.log( $scope.user );

    $scope.infoSref = 'app.info.';
    if ($scope.user.username == 'admin') {
      $scope.infoSref = $scope.infoSref + 'admin';
    } else {
      $scope.infoSref = $scope.infoSref + 'user';
    }

  });
