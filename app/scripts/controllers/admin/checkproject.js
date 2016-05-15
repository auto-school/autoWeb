/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .controller('checkProjectCtrl', function (ProjectSrv) {
      ProjectSrv.fetchAllProject()
        .success(function (data, status, headers, config) {
          console.log(data);
        })
        .error(function(data, status, headers, config) {
          console.log(status);
        });
  });
