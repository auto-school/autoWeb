'use strict';

/**
 * @ngdoc service
 * @name autoApp.noticeService
 * @description
 * # noticeService
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('NoticeService', function ($mdToast) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.notify = function (text) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(text)
          .position('top right')
          .hideDelay(2000)
      );
    };
  });
