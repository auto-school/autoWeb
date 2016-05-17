'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:ProjectListCtrl
 * @description
 * # ProjectListCtrl
 * Controller of the autoApp
 */

angular.module('autoApp')
  .controller('ProjectListCtrl', function ($scope, ProjectSrv, $state) {
      ProjectSrv.fetchAllProject()
        .success(function (data) {
          $scope.projects = data.data;
        })
        .error(function(){
          console.log('error');
        });

    $scope.detail = function(project){
        $state.go('app.project.detail',{'project_id': project['_id']});
    }
  });
