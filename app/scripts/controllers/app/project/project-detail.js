'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:ProjectDetailCtrl
 * @description
 * # ProjectDetailCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('ProjectDetailCtrl', function ($stateParams, ProjectSrv,$scope) {
    ProjectSrv.fetchProjectById($stateParams.project_id)
      .success(function (data) {
        $scope.project = data.data
      });

    $scope.applyProject = function (project) {
      ProjectSrv.applyProject(project._id, '没有原因', 0)
        .success(function (data) {
          console.log(data);
        })
        .error(function(){
          console.log(error);
        })
    }
  });
