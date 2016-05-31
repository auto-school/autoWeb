'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:ProjectDetailCtrl
 * @description
 * # ProjectDetailCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('ProjectDetailCtrl', function ($stateParams, $scope, $mdDialog, $mdMedia, ProjectSrv, $rootScope) {
    $scope.roleInProject = '';
    $scope.btnTitle = '';
    var setRole = function () {
      $scope.applyBtnDisabled = true;
      $scope.btnTitle = '申请退出项目';
      if ($scope.project.team.charge_person.name == $scope.user.name) {

        return '负责人';
      }
      $scope.project.team.member.forEach(function (mem) {
        if (mem.name == $scope.user.name) {}
        return '成员';
      });
      $scope.project.team.mentor.forEach(function (mem) {
        if (mem.name == $scope.user.name) {}
        return '导师';
      });
      $scope.project.team.outside_mentor.forEach(function (mem) {
        if (mem.name == $scope.user.name) {}
        return '校外导师';
      });
      $scope.applyBtnDisabled = false;
      $scope.btnTitle = '申请加入项目';
      return '';
    };

    $scope.user = $rootScope.user;
    console.log('$stateParams');
    console.log($stateParams);
    ProjectSrv.fetchProjectById($stateParams.project_id)
      .success(function (data) {
        $scope.project = data.data;
        $scope.roleInProject = setRole();
      });

    $scope.showJoinDialog = function (project) {
      console.log(project);
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

      if ($scope.applyBtnDisabled) {
        $mdDialog.show({
          controller: QuitCtrl,
          controllerAs: 'ctrl',
          templateUrl: 'views/app/pages/project/quit.html',
          parent: angular.element(document.body),
          locals: {
            project: project
          },
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        });
        $scope.$watch(function() {
          return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
          $scope.customFullscreen = (wantsFullScreen === true);
        });

      } else {
        $mdDialog.show({
          controller: JoinCtrl,
          controllerAs: 'ctrl',
          templateUrl: 'views/app/pages/project/join.html',
          parent: angular.element(document.body),
          locals: {
            project: project
          },
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        });
        $scope.$watch(function() {
          return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
          $scope.customFullscreen = (wantsFullScreen === true);
        });
      }
    };
  });


function JoinCtrl($scope, $mdDialog, project, ProjectSrv) {
  $scope.applicant = {
    reason: "",
    role: -1,
    project: project
  };
  $scope.pcMode = [null, null];
  $scope.cancelBtnDisabled = false;
  $scope.submitBtnDisabled = false;


  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.join = function () {
    $scope.submitBtnDisabled = true;
    $scope.pcMode[1] =  'indeterminate';

    $scope.validate();
    if ($scope.errors.length == 0 ) {

      ProjectSrv.applyProject(project._id, $scope.applicant.reason, $scope.applicant.role)
        .success(function (data) {
          console.log(data);
        })
        .error(function(error){
          console.log(error);
        });
      $scope.submitBtnDisabled = false;
      $scope.pcMode[1] = null;
      $mdDialog.hide();

    } else {

      $scope.submitBtnDisabled = false;
      $scope.pcMode[1] = null;
    }


  };

  // 身份类型
  $scope.applicantType = [{
    name:'导师',
    index: 0
  }, {
    name:'校外导师',
    index: 1
  }, {
    name:'成员',
    index: 2
  }];

  // 错误提醒
  $scope.errors = [];
  $scope.validate = function () {
    $scope.errors = [];
    if ($scope.applicant.role != 1 && $scope.applicant.role != 2 && $scope.applicant.role != 3) {
      $scope.errors.push("申请角色不能为空");
    }
    if ($scope.applicant.reason == null || $scope.applicant.reason == "") {
      $scope.errors.push("理由不能为空");
    }
  };
}

function QuitCtrl($scope, $mdDialog, project, ProjectSrv) {
  $scope.qApplicant = {
    reason: "",
    project: project
  };
  $scope.pcMode = [null, null];
  $scope.cancelBtnDisabled = false;
  $scope.submitBtnDisabled = false;


  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.join = function () {
    $scope.submitBtnDisabled = true;
    $scope.pcMode[1] =  'indeterminate';

    $scope.validate();
    if ($scope.errors.length == 0 ) {

      // post quit application

      $scope.submitBtnDisabled = false;
      $scope.pcMode[1] = null;
      $mdDialog.hide();

    } else {

      $scope.submitBtnDisabled = false;
      $scope.pcMode[1] = null;
    }
  };

  // 错误提醒
  $scope.errors = [];
  $scope.validate = function () {
    $scope.errors = [];
    if ($scope.qApplicant.reason == null || $scope.qApplicant.reason == "") {
      $scope.errors.push("理由不能为空");
    }
  };
}
