'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:ProjectDetailCtrl
 * @description
 * # ProjectDetailCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('ProjectDetailCtrl', function ($stateParams, ProjectSrv) {
    ProjectSrv.fetchProjectById($stateParams.project_id)
      .success(function (data) {
        console.log(data)
      })
  });
