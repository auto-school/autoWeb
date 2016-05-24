'use strict';

/**
 * @ngdoc service
 * @name autoApp.messageService
 * @description
 * # messageService
 * Service in the autoApp.
 */
angular.module('autoApp')
  .service('MessageSrv', function (ApiSrv) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.fetchMessagesForUsername = function(username){
      return $http.get(ApiSrv.FETCH_MESSAGES_FOR_USER(username));
    };
    
  });
