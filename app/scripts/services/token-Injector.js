/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .service('myInterceptor', function (Base64, $rootScope, TokenService, AckService, $injector,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.request = function (config) {
      if ($rootScope.user) {
        config.headers['Authorization'] = 'Basic ' + Base64.encode(TokenService.getToken() + ':' + '');
      }
      return config;
    };

    this.responseError = function (response) {
      var error =  $injector.get('AckService').getAck(response.status);
      console.log(error);
      $injector.get('NoticeService').notify(error.toString());
      return $q.reject(response);
    };

    this.response = function (response) {
      var code = response.data.code;
      if(code){
        var ack = $injector.get('AckService').getAck(code.toString());
        $injector.get('NoticeService').notify(ack);
      }
      return response;
    }
  });

