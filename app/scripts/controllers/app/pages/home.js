'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('HomeCtrl', function ($scope, $state) {

    $scope.pcMode = [null, null];
    $scope.joinBtnDisabled = false;
    $scope.publishBtnDisabled = false;

    $scope.publish = function () {
      $scope.publishBtnDisabled = true;
      $scope.pcMode[1] =  'indeterminate';
      $state.go( "app.publish");
    };
    $scope.join = function () {
      $scope.joinBtnDisabled = true;
      $scope.pcMode[0] =  'indeterminate';
      $state.go( "app.join");
    };

    $scope.news = [{
      type : "校内创新项目",
      title: "国家大学生创新创业训练项目计划1",
      intro: "新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语",
      releasedMonth: "JUN",
      releasedDay: "26"
    }, {
      type : "校内创新项目",
      title: "国家大学生创新创业训练项目计划2",
      intro: "新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语",
      releasedMonth: "MAY",
      releasedDay: "17"
    }, {
      type : "校内创新项目",
      title: "国家大学生创新创业训练项目计划3",
      intro: "新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语新闻导语",
      releasedMonth: "APR",
      releasedDay: "12"
    }];

    $scope.projects = [{
      title: "项目名项目名项目名项目名项目名1",
      isProgressive: true,
      dutyPerson: "六六六",
      wantNumber: 10,
      hadNumber: 2,
      state: "项目开放中",
      startTime: "2016.2.29",
      endTime: "2016.4.30"
    },{
      title: "项目名项目名项目名项目名项目名2",
      isProgressive: true,
      dutyPerson: "六六六",
      wantNumber: 10,
      hadNumber: 1,
      state: "项目审核中",
      startTime: "2016.2.29",
      endTime: "2016.4.30"
    },{
      title: "项目名项目名项目名项目名项目名3",
      isProgressive: false,
      dutyPerson: "六六六",
      wantNumber: 2,
      hadNumber: 4,
      state: "项目开放中",
      startTime: "2016.2.29",
      endTime: "2016.4.30"
    }];
    $scope.ads = {};
    $scope.ads.left = [
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: ""},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: ""},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
    ];
    $scope.ads.right = [
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: ""},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: ""},
      { val: ""},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
      { val: "同济大学汽车学院"},
    ];
  });
