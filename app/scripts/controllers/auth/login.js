'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('LoginCtrl', function ($scope, $state, UserSrv, $mdToast) {
    $scope.user = {};
    $scope.user.name = '';
    $scope.user.password = '';

    $scope.login = function() {

      UserSrv.login($scope.user)
        .success(function (data, status, headers, config) {
          UserSrv.loginSuccess(data);
          $state.go('app.home');

        })
        .error(function(data, status, headers, config) {

          $scope.notify('error');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    }


    $scope.notify = function (text) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(text)
          .position('top right')
          .hideDelay(3000)
      );
    }


  });
