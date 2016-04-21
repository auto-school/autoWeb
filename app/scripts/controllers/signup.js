'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('SignupCtrl', function ($scope, $http) {
    $scope.user = {};
    $scope.user.name = "";
    $scope.user.password = "";
    $scope.user.verifiedPassword = "";

    $scope.signup = function () {
      var data = {'username': $scope.user.name, 'password': $scope.user.password}
      $http.post( "http://tztztztztz.org:5000/user", data)
        .success(function (data, status, headers, config) {
          console.log(data);
        })
    }
  });
