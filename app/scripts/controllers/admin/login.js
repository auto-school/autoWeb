'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:AdminloginCtrl
 * @description
 * # AdminloginCtrl
 * Controller of the autoApp
 */

angular.module('autoApp')
  .controller('AdminLoginCtrl', function ($scope, adminSrv, $state) {
    $scope.user = {};
    $scope.login = function () {
      adminSrv.login($scope.user)
        .success(function (data, status, headers, config) {
          $state.go('admin.app.project');
        })
        .error(function(data, status, headers, config) {
          console.log(status);
        });
    }
  });
