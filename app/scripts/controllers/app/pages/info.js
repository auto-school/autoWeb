'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('InfoCtrl', function ($scope) {


    // TAB1
    $scope.personalInfo = {
      'name': '姓名',
      'id': '学号',
      'intro': '个人说明',
      'experience': '活动经历',
      'awards': '获得奖项'
    };
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
        setTimeout(function () {
          $scope.personalInfoBtnDisabled = false;
          $scope.pcMode = null;
          $scope.btnName = '编辑';
          }, 1000);

      } else {
        $scope.btnName = '更新';
      }
    };

    // TAB2
    $scope.publishedPro = [{
      'name': 'project name',
      'intro': '简要介绍',
      'deadline': '2014-05-31',
      'keyWords': ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    },{
      'name': 'project name',
      'intro': '简要介绍',
      'deadline': '2014-05-31',
      'keyWords': ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    },{
      'name': 'project name',
      'intro': '简要介绍',
      'deadline': '2014-05-31',
      'keyWords': ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    },{
      'name': 'project name',
      'intro': '简要介绍',
      'deadline': '2014-05-31',
      'keyWords': ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    },{
      'name': 'project name',
      'intro': '简要介绍',
      'deadline': '2014-05-31',
      'keyWords': ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    },{
      'name': 'project name',
      'intro': '简要介绍',
      'deadline': '2014-05-31',
      'keyWords': ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    }];


    // TAB3


  });
