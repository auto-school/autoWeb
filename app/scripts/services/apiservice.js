'use strict';

/**
 * @ngdoc service
 * @name autoApp.apiservice
 * @description
 * # apiservice
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('apiSrv', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.BASE_URL = 'http://localhost:5000/';
    
    this.LOGIN = this.BASE_URL + 'token';

  });
