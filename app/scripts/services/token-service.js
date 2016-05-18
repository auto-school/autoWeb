'use strict';

/**
 * @ngdoc service
 * @name autoApp.tokenService
 * @description
 * # tokenService
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('TokenService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.token = "";
    this.getToken = function () {
      return this.token;
    };
    this.setToken = function ( newToken ) {
      this.token = newToken;
    }
  });
