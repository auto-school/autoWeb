'use strict';

/**
 * @ngdoc service
 * @name autoApp.apiservice
 * @description
 * # apiservice
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('ApiSrv', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.BASE_URL = 'http://localhost:5000/';

    this.LOGIN = this.BASE_URL + 'token';

    this.ADMIN_LOGIN = this.BASE_URL + 'admin/token';

    this.FETCH_PROJECTS = this.BASE_URL + 'projects';

  });
