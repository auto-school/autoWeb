'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('InfoCtrl', function ($scope, $rootScope, $timeout, ProjectSrv) {

    $scope.user = $rootScope.user;

    // TAB1
    $scope.isPersonalInfoReadonly = true;
    $scope.pcMode = false;
    $scope.personalInfoBtnDisabled = false;
    $scope.btnName = '编辑';

    $scope.personalInfoBtnClicked = function () {

      $scope.isPersonalInfoReadonly = !$scope.isPersonalInfoReadonly;
      if ($scope.isPersonalInfoReadonly) {
        $scope.personalInfoBtnDisabled = true;
        $scope.pcMode = 'indeterminate';

        // 假装成功
        $timeout(function() {
          $scope.personalInfoBtnDisabled = false;
          $scope.pcMode = null;
          $scope.btnName = '编辑';
        }, 1000);

      } else {
        $scope.btnName = '更新';
      }
    };

    // TAB2
    console.log($scope.user.username);
    ProjectSrv.fetchProjectByOwner($scope.user.username)
      .success(function (data) {
        $scope.projects = data;
        $scope.projects.forEach(function (pro) {
          var deadline = new Date(pro.deadline);
          var Y = deadline.getFullYear() + '-';
          var M = (deadline.getMonth()+1 < 10 ? '0'+(deadline.getMonth()+1) : deadline.getMonth()+1) + '-';
          var D = deadline.getDate();
          pro.deadline = Y + M + D;
        })
      });


    // TAB3


  });
