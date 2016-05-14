'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('NavigationCtrl', function ($scope, UserSrv) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = UserSrv.getUser();

    console.log( $scope.user );
  });
