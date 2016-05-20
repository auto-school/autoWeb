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
    $scope.pcMode = null;
    $scope.btnDisabled = false;

    $scope.signup = function () {
      console.log("pressed");
      $scope.btnDisabled = true;
      $scope.pcMode =  'indeterminate';

      if ($scope.user.name == null || $scope.user.name == "" || $scope.user.username == null || $scope.user.username == "" ||
        $scope.user.password == null || $scope.user.password == "" || $scope.verifiedPassword == null || $scope.verifiedPassword == "") {

        $scope.notify("信息不完整", 3000);
        $scope.pcMode = null;
        $scope.btnDisabled = false;
      } else if ($scope.user.password != $scope.verifiedPassword) {
        $scope.notify("两次密码不一致,请确认密码", 3000);
        $scope.pcMode = null;
        $scope.btnDisabled = false;
      } else {
        UserSrv.signup($scope.user)
          .success(function (data, status, headers, config) {
            console.log('login succuss!');
            $scope.pcMode = null;
            $scope.btnDisabled = false;
            $state.go('app.home');
          })
          .error(function () {
            $scope.notify('error');
            $scope.pcMode = null;
            $scope.btnDisabled = false;
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
