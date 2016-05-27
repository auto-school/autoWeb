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
      types : [],
      isGradualPro: false
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
      $scope.validate();
      if ($scope.errors.count == 0 ) {
        $scope.project.deadline = ($scope.deadline.getTime() / 1000).toFixed(0);
        console.log($scope.project);
        // post
      } else {
        var alert = "";
        $scope.errors.forEach(function (str) {
          alert = alert + "<span class='.md-caption'>" + str + "</span><br>";
        });
        $scope.submitBtnDisabled = false;
        $scope.pcMode[1] = null;
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title("不符合提交标准")
            .htmlContent(alert)
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

    $scope.errors = [];
    $scope.validate = function () {
      $scope.errors = [];
      if ($scope.project.name == null || $scope.project.name == "") {
        $scope.errors.push("项目名称不能为空");
      }
      if ($scope.project.keyword == null) {
        $scope.errors.push("关键字不能为空");
      }
      if ($scope.project.introduction == null || $scope.project.introduction == "") {
        $scope.errors.push("项目介绍不能为空");
      }
      if ($scope.project.basic == null || $scope.project.basic == "") {
        $scope.errors.push("项目现状不能为空");
      }
      if ($scope.project.member_number == null) {
        $scope.errors.push("项目人数不能为空");
      }
      if ($scope.project.member_number <= 0) {
        $scope.errors.push("有效项目人数不能为空");
      }
      if ($scope.deadline == null) {
        $scope.errors.push("截止日期不能为空");
      }
      if ($scope.project.member_demand == null || $scope.project.member_demand == "") {
        $scope.errors.push("成员要求不能为空");
      }
      if ($scope.project.types == []) {
        $scope.errors.push("项目类型不能为空");
      }
    };

  });
