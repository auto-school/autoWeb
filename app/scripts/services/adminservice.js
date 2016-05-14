'use strict';

/**
 * @ngdoc service
 * @name autoApp.adminservice
 * @description
 * # adminservice
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('adminSrv', function ($http, Base64, apiSrv,TokenService,$rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.login = function (user) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode( user.username + ':' + user.password);
      var promise = $http.post( apiSrv.ADMIN_LOGIN, "" );
      promise.success(function (data) {
        $rootScope.user = data.data.user;
        TokenService.setToken(data.data.token);
      });
      return promise
    };

  });
