'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:PublishCtrl
 * @description
 * # PublishCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('PublishCtrl', function ($scope) {
    $scope.project = {};
    $scope.project.name = "";
    $scope.project.keyword = [];
    $scope.project.creator = {};
    $scope.project.introduction = "";
    $scope.project.basic = "";
    $scope.project.member_number = 0;
    $scope.project.deadline = 0;
    $scope.project.team = {};
    $scope.project.team.member = [];
    $scope.project.team.charge_person = [];
    $scope.project.mentor = [];
    $scope.project.outside_mentor = [];
    $scope.project.member_demand = "";
    $scope.project.types = [];

    $scope.inputKeyword = "";

    $scope.addKeyword = function () {
      $scope.project.keyword.push( $scope.inputKeyword );
    }
    $scope.deleteKeyword = function (phone) {
      var newphones = [];
      $scope.project.keyword.forEach(function(element) {
        if(element != phone){
          newphones.push(element);
        }
      });
      $scope.phones = newphones;
    }
    $scope.typeChange = function () {

    }

    $scope.checkProjectType = function (type) {
      type.checked = !type.checked;
      var types = [];
      $scope.projectTypes.forEach(function (elem) {
        if(elem.checked) types.push(elem.value);
      })
      $scope.project.types = types;
      console.log(types);
    }

    $scope.projectTypes = [
      {'name':'国创','checked':false, 'value':0},
      {'name':'上创','checked':false, 'value':1},
      {'name':'sitp','checked':false, 'value':2}
    ]
  });
