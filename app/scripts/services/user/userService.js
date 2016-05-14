'use strict';

/**
 * @ngdoc service
 * @name autoApp.user/user
 * @description
 * # user/user
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('UserSrv', function ($http, Base64, BASE_URL,TokenService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.user = {};

    this.getUser = function () {
      return this.user;
    };

    this.login = function (user) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode( user.name + ':' + user.password);
      return $http.post( BASE_URL + "token", "" );
    };

    this.loginSuccess = function (data) {
      this.user = data.data.user;
      TokenService.setToken(data.data.token);
    }
  });
