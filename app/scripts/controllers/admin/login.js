'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:AdminloginCtrl
 * @description
 * # AdminloginCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('AdminLoginCtrl', function ($scope, UserSrv, $state) {
    $scope.user = {};
    $scope.login = function () {
      UserSrv.login($scope.user)
        .success(function (data, status, headers, config) {

          UserSrv.loginSuccess(data);

          $state.go('app.home');

        })
        .error(function(data, status, headers, config) {

        });
    }
  });
