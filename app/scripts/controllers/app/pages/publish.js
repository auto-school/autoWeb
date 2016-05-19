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
      $scope.project.deadline = ($scope.deadline.getTime() / 1000).toFixed(0);
      console.log($scope.project);
    };
  });
