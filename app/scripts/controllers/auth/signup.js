'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('SignupCtrl', function ($scope, UserSrv, $mdToast, $state) {
    $scope.user = {};
    $scope.verifiedPassword = "";

    $scope.signup = function () {
      if ($scope.user.password != $scope.verifiedPassword) {
        $scope.notify("两次密码不一致,请确认密码", 3000);
      } else {
        UserSrv.signup($scope.user)
          .success(function (data, status, headers, config) {
            console.log('login succuss!');
            $state.go('app.home');
          })
          .error(function () {
            $scope.notify('error');
          });
      }
    };

    $scope.notify = function (text, delay) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(text)
          .position('top right')
          .hideDelay(delay)
      );
    };
  });
