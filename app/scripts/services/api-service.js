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

    //this.BASE_URL = 'http://localhost:5000/';

    // 服务地址
    this.BASE_URL = 'http://tztztztztz.org:5000/';

    // 登陆, 拿到token
    this.LOGIN = this.BASE_URL + 'token';

    // 管理员登陆
    this.ADMIN_LOGIN = this.BASE_URL + 'admin/token';

    // 取回所有的项目
    this.FETCH_PROJECTS = this.BASE_URL + 'projects';

    // 申请资源
    this.APPLICATION = this.BASE_URL + 'application/';

    //项目资源
    this.PROJECT = this.BASE_URL + 'project/';

    //消息资源
    this.MESSAGE = this.BASE_URL + 'message/';

    //用户资源
    this.USER = this.BASE_URL + 'user/';

    //取回所有的消息
    this.MESSAGES = this.BASE_URL + 'messages';


    // 找到某个人所有的消息
    this.FETCH_MESSAGES_FOR_USER = function (username) {
      return this.USER + username + '/messages';
    };
    
    // 管理员审核通过项目
    this.CHECK_PROJECT = function (project_id) {
      return this.BASE_URL + 'admin/' +  'project/' + project_id + '/approval';
    };

    // 管理员审核不通过项目
    this.APPROVE_APPLICATION = function (application_id) {
      return this.APPLICATION + application_id + '/approval';
    };

    // 项目创建人同意别人的申请
    this.REJECT_APPLICATION = function (application_id) {
      return this.APPLICATION + application_id + '/rejection';
    };

    // 项目创建人拒绝别人的申请
    this.REJECT_PROJECT = function (project_id) {
      return this.BASE_URL + 'admin/' + 'project/' + project_id + '/rejection';
    };
    
    
    this.FETCH_PROJECT = function (project_id) {
      return this.PROJECT + project_id;
    }


  });
