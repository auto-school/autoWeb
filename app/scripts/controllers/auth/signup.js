'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('SignupCtrl', function ($scope, UserSrv, $mdToast, $state, $mdDialog) {
    $scope.user = {};
    $scope.verifiedPassword = "";
    $scope.pcMode = null;
    $scope.btnDisabled = false;

    $scope.signup = function () {
      console.log("pressed");
      $scope.btnDisabled = true;
      $scope.pcMode = 'indeterminate';

      $scope.validate();
      if ($scope.errors.length == 0 ) {
        UserSrv.signup($scope.user)
          .success(function (data, status, headers, config) {
            $scope.pcMode = null;
            $scope.btnDisabled = false;
            $state.go('app.home');
          })
          .error(function () {
            $scope.pcMode = null;
            $scope.btnDisabled = false;
          });
      } else {
        var alert = "";
        $scope.errors.forEach(function (str) {
          alert = alert + "<span class='.md-caption'>" + str + "</span><br>";
        });
        $scope.btnDisabled = false;
        $scope.pcMode = null;
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title("无法注册")
            .htmlContent(alert)
            .ariaLabel("无法注册")
            .ok('继续填写')
        );
      }
    };

    $scope.errors = [];
    $scope.validate = function () {
      $scope.errors = [];
      if ($scope.user.name == null || $scope.user.name == "") {
        $scope.errors.push("姓名不能为空");
      }
      if ($scope.user.username == null || $scope.user.username == "") {
        $scope.errors.push("用户名不能为空");
      }
      if ($scope.user.password == null || $scope.user.password == "") {
        $scope.errors.push("密码不能为空");
      }
      if ($scope.user.password != $scope.verifiedPassword) {
        $scope.errors.push("密码不一致,请确认");
      }
    };
  });
