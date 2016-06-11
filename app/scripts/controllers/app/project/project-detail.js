'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:ProjectDetailCtrl
 * @description
 * # ProjectDetailCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('ProjectDetailCtrl', function ($stateParams, $window, $scope, $mdDialog, $mdMedia, ProjectSrv, $rootScope) {
    $scope.user = $rootScope.user;
    var projectTypes = ['国创', '上创', 'sitp', '挑战杯', '创新赛事', '其他'];
    var transDate = function (time) {
      var deadline = new Date(time);
      var Y = deadline.getFullYear() + '-';
      var M = (deadline.getMonth()+1 < 10 ? '0'+(deadline.getMonth()+1) : deadline.getMonth()+1) + '-';
      var D = deadline.getDate();
      return Y + M + D;
    };
    $scope.mentorStr = '';
    $scope.outsideMentorStr = '';
    $scope.memberStr = '';
    ProjectSrv.fetchProjectById($stateParams.project_id)
      .success(function (data) {
        console.log(data);
        $scope.project = data.data;
        $scope.roleInProject = setRole();

        $scope.project.deadline = transDate($scope.project.deadline);
        $scope.project.created_time = transDate($scope.project.created_time);

        var types = $scope.project.types;
        $scope.project.types = [];
        types.forEach(function (type) {
          $scope.project.types.push(projectTypes[type]);
        });

        $scope.project.team.mentor.forEach(function (m) {
          $scope.mentorStr = $scope.mentorStr + ' ' + m.name;
        });
        $scope.project.team.outside_mentor.forEach(function (m) {
          $scope.outsideMentorStr = $scope.outsideMentorStr + ' ' + m.name;
        });
        $scope.project.team.member.forEach(function (m) {
          $scope.memberStr = $scope.memberStr + ' ' + m.name;
        });
      });

    $scope.roleInProject = '';
    $scope.btnTitle = '';
    $scope.showChargeMan = true;
    var setRole = function () {
      $scope.btnType = 2;
      $scope.btnTitle = '申请加入项目';
      var string = '';
      if ($scope.project.team.charge_person.name == $scope.user.name) {
        $scope.btnType = 1;
        $scope.showChargeMan = false;
        $scope.btnTitle = '重新编辑项目';
        string = '您为项目的创建人';
      }
      $scope.project.team.member.forEach(function (mem) {
        if (mem.name == $scope.user.name) {
          $scope.btnType = 0;
          $scope.btnTitle = '申请退出项目';
          string = '您为项目的成员';
        }
      });
      $scope.project.team.mentor.forEach(function (mem) {
        if (mem.name == $scope.user.name) {
          $scope.btnType = 0;
          $scope.btnTitle = '申请退出项目';
          string = '您为项目的导师';
        }
      });
      $scope.project.team.outside_mentor.forEach(function (mem) {
        if (mem.name == $scope.user.name) {
          $scope.btnType = 0;
          $scope.btnTitle = '申请退出项目';
          string = '您为项目的校外导师';
        }
      });
      $scope.project.appliers.forEach(function (mem) {
        if (mem.name == $scope.user.name) {
          $scope.btnType = 4;
          $scope.btnTitle = '申请加入项目';
          string = '您已申请加入该项目';
        }
      });
      return string;
    };

    $scope.goBack = function () {
      console.log('go back');
      $window.history.back();
    };


    $scope.showJoinDialog = function (project) {
      console.log(project);
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

      if ($scope.btnType == 0) {
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

      } else if ($scope.btnType == 2){
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
      } else if ($scope.btnType == 1){
        $scope.btnType = 3;
        $scope.btnTitle = '重新发布';
        console.log('重新编辑');
      } else if ($scope.btnType == 3 ){
        $scope.btnType = 1;
        $scope.btnTitle = '重新编辑项目';
        console.log('重新发布 重发要审核吗?');
      } else if ($scope.btnType == 4 ){

      }
    };
  });


function JoinCtrl($scope, $mdDialog, $state, project, ProjectSrv) {
  $scope.application = {
    reason: "",
    role: -1,
    project: {
      id: project._id
    }
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
      $scope.application.role = Number($scope.application.role);
      console.log($scope.application);
      ProjectSrv.applyProject($scope.application.project.id, $scope.application.reason,  $scope.application.role)
        .success(function (data) {
          console.log('application success!');
          console.log(data);
          $state.go('app.project.detail',{'project_id': project['_id']}, {reload: true});
        })
        .error(function(error){
          console.log('application fail!');
          console.log(error);
        });

      $mdDialog.hide();

    }
    $scope.submitBtnDisabled = false;
    $scope.pcMode[1] = null;


  };

  // 身份类型
  $scope.applicantType = [{
    name:'成员',
    index: 0
  }, {
    name:'导师',
    index: 1
  }, {
    name:'校外导师',
    index: 2
  }];

  // 错误提醒
  $scope.errors = [];
  $scope.validate = function () {
    $scope.errors = [];
    if ($scope.application.role != 0 && $scope.application.role != 1 && $scope.application.role != 2) {
      $scope.errors.push("申请角色不能为空");
    }
    if ($scope.application.reason == null || $scope.application.reason == "") {
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
