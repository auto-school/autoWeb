'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:AdminloginCtrl
 * @description
 * # AdminloginCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('AdminLoginCtrl', function ($scope) {
    $scope.user = {};
    $scope.login = function () {
      console.log($scope.user)
    }
  });
