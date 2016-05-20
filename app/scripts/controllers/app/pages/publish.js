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

    $scope.project = {
      name : "",
      keyword : [
        "2016"
      ],
      introduction : "",
      basic : "",
      member_number : null,
      deadline : "",
      member_demand : "",
      types : []
    };
    $scope.deadline = null;
    $scope.pcMode = [null, null];
    $scope.cancelBtnDisabled = false;
    $scope.submitBtnDisabled = false;

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

    // 按钮
    $scope.submit = function () {
      
      $scope.submitBtnDisabled = true;
      $scope.pcMode[1] =  'indeterminate';
      var checkResult = $scope.checkInquired();
      if (checkResult == "ok") {

        $scope.project.deadline = ($scope.deadline.getTime() / 1000).toFixed(0);
        console.log($scope.project);
        // post
      } else {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title("不符合提交标准")
            .textContent(checkResult)
            .ariaLabel("不许提交")
            .ok('继续填写')
        );
      }
    };
    $scope.cancel = function () {
      console.log("pressed");
      var confirm = $mdDialog.confirm()
        .title('确认退出?')
        .textContent('所有信息将不被保存')
        .ariaLabel('退出确认')
        .ok('确认')
        .cancel('取消');
      $mdDialog.show(confirm).then(function() {
        $state.go( "app.home");
      }, function() {});

    };

    $scope.checkInquired = function () {
      if ($scope.project.name == null || $scope.project.name == "") {
        return "项目名称不能为空";
      } else if ($scope.project.keyword == null) {
        return "关键字不能为空";
      } else if ($scope.project.introduction == null || $scope.introduction.name == "") {
        return "项目介绍不能为空";
      } else if ($scope.project.basic == null || $scope.project.basic == "") {
        return "项目现状不能为空";
      } else if ($scope.project.member_number == null) {
        return "请填写项目人数";
      } else if ($scope.project.member_number <= 0) {
        return "请填写有效项目人数";
      }else if ($scope.project.deadline == null) {
        return "请选择截止日期";
      } else if ($scope.project.member_demand == null || $scope.project.member_demand == "") {
        return "成员要求不能为空";
      } else if ($scope.project.types == []) {
        return "请选择项目类型";
      } else {
        return "ok";
      }
    }

  });
