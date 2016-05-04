'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('LoginCtrl', function ($scope, $http, Base64, BASE_URL, TokenService, $state) {
    $scope.user = {};
    $scope.user.name = "";
    $scope.user.password = "";

    $scope.login = function() {
      var data = $scope.user;
      $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode( $scope.user.name + ':' + $scope.user.password);

      $http.post( BASE_URL + "token", "" )
        .success(function (data, status, headers, config) {
          TokenService.setToken(data.data.token);
          $state.go("app.home");


        })
        .error(function(data, status, headers, config) {
          alert(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    }


  });
