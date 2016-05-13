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
    $scope.verifiedPassword = "";

    $scope.signup = function () {
      $http.post( "http://tztztztztz.org:5000/user", $scope.user)
        .success(function (data, status, headers, config) {
          console.log(data);
        })
        .error(function () {
          console.log("error")
        })
    }
  });
