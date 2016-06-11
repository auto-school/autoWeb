/**
 * Created by tanjingru on 5/15/16.
 */

angular.module('autoApp')
  .controller('checkProjectCtrl', function ($scope, $rootScope, $timeout, ProjectSrv, $mdDialog, $mdMedia) {
    $scope.user = $rootScope.user;

    var projectTypes = ['国创', '上创', 'sitp', '挑战杯', '创新赛事', '其他'];
    $scope.publishedProPreviousBtnDisabled = true;
    $scope.publishedProNextBtnDisabled = true;

    $scope.fetch = function () {
      ProjectSrv.fetchAllNeedToCheckProject()
        .success(function (data, status, headers, config) {
          $scope.projectsToBeChecked = data.data;
          $scope.projectsToBeChecked.forEach(function (pro) {
            var deadline = new Date(pro.deadline);
            var Y = deadline.getFullYear() + '-';
            var M = (deadline.getMonth()+1 < 10 ? '0'+(deadline.getMonth()+1) : deadline.getMonth()+1) + '-';
            var D = deadline.getDate();
            pro.deadline = Y + M + D;
            var types = pro.types;
            pro.types = [];
            types.forEach(function (type) {
              pro.types.push(projectTypes[type]);
            })
          });
        })
        .error(function(data, status, headers, config) {
          console.log(status);
        });
    };
    $scope.fetch();
    $scope.showDetail = function (project) {
      console.log(project);
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: showCtrl,
        controllerAs: 'ctrl',
        templateUrl: 'views/app/pages/info/prodetail.html',
        parent: angular.element(document.body),
        locals: {
          project: project
        },
        scope: $scope,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };
  });


function showCtrl($scope, $mdDialog, project, ProjectSrv, $state) {

  $scope.pcMode = null;
  $scope.objectBtnDisabled = false;
  $scope.checkBtnDisabled = false;

  $scope.project = project;


  $scope.object = function() {
    ProjectSrv.rejectProject(project._id)
      .success(function () {
        console.log("object project:(id) " + project._id);

        $scope.fetch();
        $mdDialog.hide();
      })
      .error(function () {
        $mdDialog.cancel();
      });
  };

  $scope.check = function () {

    ProjectSrv.checkProject(project._id)
      .success(function () {
        console.log("check project:(id) " + project._id);

        $scope.fetch();
        $mdDialog.hide();

      })
      .error(function () {
        $mdDialog.cancel();
      });

  };



}
