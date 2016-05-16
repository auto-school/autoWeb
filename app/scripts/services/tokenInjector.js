/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .service('myInterceptor', function (Base64, $rootScope, TokenService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      this.request = function (config) {
        if(!$rootScope.user){
          //config.headers.common['Authorization'] = 'Basic ' + Base64.encode( TokenService.getToken() + ':' + ' ');
        }
        return config;
      }
  });

