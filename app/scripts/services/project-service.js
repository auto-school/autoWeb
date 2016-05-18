/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .service('ProjectSrv', function ($http, ApiSrv) {

    // AngularJS will instantiate a singleton by calling "new" on this function
    this.fetchAllNeedToCheckProject = function () {
      return $http.get(ApiSrv.FETCH_PROJECTS, {params:{status:0}});
    };

    this.fetchProjectById = function (project_id) {
      return $http.get(ApiSrv.FETCH_PROJECT(project_id));
    };

    this.applyProject = function(project_id, reason){
      var resource = {reason:reason, project:{id:project_id}};
      return $http.post(ApiSrv.APPLICATION, resource);
    };

    this.checkProject = function (project_id) {
      return $http.post(ApiSrv.CHECK_PROJECT(project_id),"");
    };

    this.fetchAllProject = function () {
      return $http.get(ApiSrv.FETCH_PROJECTS);
    }

  });
