'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('HomeCtrl', function ($scope, $state) {
    
    $scope.publish = function () {
      $state.go( "app.publish");
    }
  });
