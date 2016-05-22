'use strict';

/**
 * @ngdoc service
 * @name autoApp.user/user
 * @description
 * # user/user
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('UserSrv', function ($http, Base64, ApiSrv, TokenService, $rootScope, Locals) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.login = function (user) {
      $rootScope.user = undefined;
      $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode( user.username + ':' + user.password);
      var promise = $http.post(ApiSrv.LOGIN, "");
      promise.success(function (data) {
        $rootScope.user = data.data.user;
        TokenService.setToken(data.data.token);
        Locals.setObject('user', $rootScope.user);
        Locals.set('token', data.data.token);
      });

      return promise;
    };

    this.signup = function (user) {
      $rootScope.user = undefined;
      var url = ApiSrv.BASE_URL + "user";
      var promise = $http.post(url, user);
      promise.success(function (data) {
        $rootScope.user = user;

        //TokenService.setToken(data.data.token);
        Locals.setObject('user', $rootScope.user);
        //Locals.set('token', data.data.token);
      });

      return promise;
    };

  });
