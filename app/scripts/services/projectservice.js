/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .service('ProjectSrv', function ($http, apiSrv) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.fetchAllProject = function () {
      return $http.get(apiSrv.FETCH_PROJECTS)
    }
  });
