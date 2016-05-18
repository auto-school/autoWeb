'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:PublishCtrl
 * @description
 * # PublishCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('PublishCtrl', function ($scope, $state, $mdDialog, UserSrv) {
    $scope.user = UserSrv.getUser();
    $scope.project = UserSrv.getProject();
    $scope.project.creator = {
      id: $scope.user.id,
      name: $scope.user.name
    };

    $scope.mentor = {
      id: $scope.project.team.mentor.length > 0 ? $scope.project.team.mentor[0].id : null,
      name: $scope.project.team.mentor.length > 0 ? $scope.project.team.mentor[0].name : null
    };
    $scope.outside_mentor = {
      id: $scope.project.team.outside_mentor.length > 0 ? $scope.project.team.outside_mentor[0].id : null,
      name: $scope.project.team.outside_mentor.length > 0 ? $scope.project.team.outside_mentor[0].name : null
    };
    $scope.deadline = {
      day: $scope.project.deadline
    };


    // 项目类型
    $scope.checkProjectType = function (type) {
      type.checked = !type.checked;
      var types = [];
      $scope.projectTypes.forEach(function (elem) {
        if(elem.checked) types.push(elem.value);
      });
      $scope.project.types = types;
    };
    $scope.projectTypes = [
      {'name':'国创','checked':false, 'value':0},
      {'name':'上创','checked':false, 'value':1},
      {'name':'sitp','checked':false, 'value':2},
      {'name':'挑战杯','checked':false, 'value':3},
      {'name':'创新赛事','checked':false, 'value':4},
      {'name':'其他','checked':false, 'value':5}
    ];
    $scope.project.types.forEach(function (elem) {
      $scope.projectTypes[elem].checked = true;
      $scope.projectTypes[elem].boxValue = true;
    });



    // 按钮s
    $scope.nextPage = function () {
      console.log($scope.project);
      $scope.project.deadline = $scope.deadline.day;
      UserSrv.setProject($scope.project);
      $state.go( "app.publish.step2");
    };
    $scope.frontPage = function () {
      console.log($scope.project);
      console.log($scope.mentor);
      $scope.setMember();
      UserSrv.setProject($scope.project);
      $state.go( "app.publish.step1");
    };
    $scope.submit = function () {
      $scope.setMember();

      console.log($scope.project);
    };
    $scope.setMember = function () {
      $scope.project.team.charge_person = [];
      $scope.project.team.member = [];
      $scope.team_member.forEach(function (elem) {
        if (elem.isChargeMan) {
          $scope.project.team.charge_person.push({
            id: elem.id,
            name: elem.name
          })
        } else {
          $scope.project.team.member.push({
            id: elem.id,
            name: elem.name
          })
        }
      });
      // 单个导师 or 多个
      if (($scope.mentor.id != null && $scope.mentor.id != "") || ($scope.mentor.name != null && $scope.mentor.name != "")) {
        $scope.project.team.mentor = [{
          id: $scope.mentor.id,
          name: $scope.mentor.name
        }];
      }
      if (($scope.outside_mentor.id != null && $scope.outside_mentor.id != "") || ($scope.outside_mentor.name != null && $scope.outside_mentor.name != "")) {
        $scope.project.team.outside_mentor = [{
          id: $scope.outside_mentor.id,
          name: $scope.outside_mentor.name
        }];
      }
    };

    // 添加成员
    $scope.team_member = [];
    if ($scope.project.team.charge_person.length > 0 ) {
      $scope.project.team.charge_person.forEach(function (elem) {
        $scope.team_member.push([
          {
            id: elem.id,
            name: elem.name,
            isChargeMan: true
          }
        ]);
      });
    }
    if ($scope.project.team.member.length > 0 ) {
      $scope.project.team.charge_person.forEach(function (elem) {
        $scope.team_member.push([
          {
            id: elem.id,
            name: elem.name,
            isChargeMan: false
          }
        ]);
      });
    }
    $scope.newMember = {
      isChargeMan: false
    };
    $scope.addMember = function (ev) {
      console.log($scope.newMember);
      if ($scope.newMember.id != null && $scope.newMember.name != null && $scope.newMember.id != "" && $scope.newMember.name != "") {
        $scope.team_member.push($scope.newMember);
        $scope.newMember = {isChargeMan: false};
      } else {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('添加成员失败')
            .textContent('添加成员失败: 缺失关键信息 ')
            .ariaLabel('添加成员失败')
            .ok('知道了')
            .targetEvent(ev)
        );
      }
    }
  });
