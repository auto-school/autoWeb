'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:AdminSidenavCtrl
 * @description
 * # AdminSidenavCtrl
 * Controller of the autoApp
 */

angular.module('autoApp')
  .controller('AdminSidenavCtrl', function ($scope, $mdSidenav, ssSideNav, $timeout, $log) {
    
    $scope.menu = ssSideNav;

    // Show or Hide menu
    ssSideNav.setVisible('toogle_1', true);
    ssSideNav.setVisibleFor([{
      id: 'toogle_1_link_2',
      value: true
    }, {
      id: 'toogle_1_link_1',
      value: true
    }]);

  });

