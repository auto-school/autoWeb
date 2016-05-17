'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('NavigationCtrl', function ($scope, $rootScope) {

    $scope.user = $rootScope.user;
    console.log( $scope.user );
  });
