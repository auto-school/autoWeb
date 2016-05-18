'use strict';

/**
 * @ngdoc service
 * @name autoApp.errorService
 * @description
 * # errorService
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('AckService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.acks = {
      403: '权限不足',
      401: '登陆失败',
      400: '登陆成功',
      322: '申请成功',
      323: '注册成功'
    };
    
    this.getAck = function (code) {
      return this.acks[code];
    }
  });
