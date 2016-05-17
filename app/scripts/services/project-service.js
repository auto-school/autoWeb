/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .service('ProjectSrv', function ($http, ApiSrv) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.fetchAllNeedToCheckProject = function () {
      return $http.get(ApiSrv.FETCH_PROJECTS, {params:{status:0}});
    }
  });
