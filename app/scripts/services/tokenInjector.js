/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .factory('myInterceptor', function (Base64, $rootScope, TokenService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var requestInterceptor = {
      request: function (config) {
        console.log('123');
        if(!$rootScope.user){
          //config.headers.common['Authorization'] = 'Basic ' + Base64.encode( TokenService.getToken() + ':' + ' ');
        }
        return config;
      }
    };
    return requestInterceptor;
  });

