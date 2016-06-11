'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('InfoCtrl', function ($scope, $rootScope, $timeout, ProjectSrv, $state) {

    $scope.user = $rootScope.user;
    $scope.pcMode = [null, null, null, null];

    // TAB1
    $scope.isPersonalInfoReadonly = true;

    $scope.personalInfoBtnDisabled = false;
    $scope.btnName = '编辑';

    $scope.personalInfoBtnClicked = function () {

      $scope.isPersonalInfoReadonly = !$scope.isPersonalInfoReadonly;
      if ($scope.isPersonalInfoReadonly) {
        $scope.personalInfoBtnDisabled = true;
        $scope.pcMode[0] = 'indeterminate';

        // 假装成功
        $timeout(function() {
          $scope.personalInfoBtnDisabled = false;
          $scope.pcMode[0] = null;
          $scope.btnName = '编辑';
        }, 1000);

      } else {
        $scope.btnName = '更新';
      }
    };

    // TAB2
    $scope.publishedProPreviousBtnDisabled = true;
    $scope.publishedProNextBtnDisabled = true;

    ProjectSrv.fetchProjectByOwner($scope.user.username)
      .success(function (data) {
        $scope.publishedProjects = data;
        $scope.publishedProjects.forEach(function (pro) {
          var deadline = new Date(pro.deadline);
          var Y = deadline.getFullYear() + '-';
          var M = (deadline.getMonth()+1 < 10 ? '0'+(deadline.getMonth()+1) : deadline.getMonth()+1) + '-';
          var D = deadline.getDate();
          pro.deadline = Y + M + D;
        });

        console.log($scope.publishedProjects);
      });


    // TAB3
    $scope.joinedProPreviousBtnDisabled = true;
    $scope.joinedProNextBtnDisabled = true;

    ProjectSrv.fetchProjectByParticipant($scope.user.username)
      .success(function (data) {

        $scope.joinedProjects = data.data;
        $scope.joinedProjects.forEach(function (pro) {
          var deadline = new Date(pro.deadline);
          var Y = deadline.getFullYear() + '-';
          var M = (deadline.getMonth()+1 < 10 ? '0'+(deadline.getMonth()+1) : deadline.getMonth()+1) + '-';
          var D = deadline.getDate();
          pro.deadline = Y + M + D;
        });
        console.log($scope.joinedProjects);
      });

    $scope.showPublishedProDetail = function(project) {
      $state.go('app.project.detail',{'project_id': project._id});
    };

    $scope.showJoinededProDetail = function(project) {
      $state.go('app.project.detail',{'project_id': project._id.$oid});
    };


  });
