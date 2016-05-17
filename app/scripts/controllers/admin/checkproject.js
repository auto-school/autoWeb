/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .controller('checkProjectCtrl', function (ProjectSrv, $scope) {
      ProjectSrv.fetchAllNeedToCheckProject()
        .success(function (data, status, headers, config) {
          $scope.projects = data.data;
        })
        .error(function(data, status, headers, config) {
          console.log(status);
        });

    $scope.checkProject = function (project) {
        ProjectSrv.checkProject(project['_id'])
          .success(function () {
            project['status'] = 1;
          })
          .error(function () {
            console.log('error');
          })
    }
  });
