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

    this.applyProject = function(project_id, reason, role){
      var resource = {reason:reason, project:{id:project_id}, role:role};
      return $http.post(ApiSrv.APPLICATION, resource);
    };

    this.checkProject = function (project_id) {
      return $http.post(ApiSrv.CHECK_PROJECT(project_id),'');
    };

    this.rejectProject = function (project_id) {
      return $http.post(ApiSrv.REJECT_PROJECT(project_id), '')
    };

    this.approveApplication = function(application_id){
      return $http.post(ApiSrv.APPROVE_APPLICATION(application_id), '');
    };

    this.rejectApplication = function(application_id){
      return $http.post(ApiSrv.REJECT_APPLICATION(application_id), '');
    };

    this.fetchAllProject = function () {
      return $http.get(ApiSrv.FETCH_PROJECTS);
    };

    this.fetchProjectByOwner = function(username){
      return $http.get(ApiSrv.FETCH_OWN_PROJECTS(username));
    };

    this.fetchProjectByParticipant = function(username){
      return $http.get(ApiSrv.FETCH_JOIN_PROJECTS(username));
    };

    this.publishProject = function (project) {
      return $http.post(ApiSrv.BASE_URL + "project", project);
    };

  });
