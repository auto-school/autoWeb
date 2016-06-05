'use strict';

/**
 * @ngdoc function
 * @name autoApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the autoApp
 */
angular.module('autoApp')
  .controller('MessagesCtrl', function ($rootScope, $scope, MessageSrv, ProjectSrv) {

    $scope.user = $rootScope.user;
    $scope.hasMessage = false;
    var fetch = function () {
      MessageSrv.fetchMessagesForUsername($scope.user.username)
        .success(function (data) {
          $scope.messages = [];
          var msgs = data.data;
          if (msgs.length == 0) {
            $scope.hasMessage = true;
          }

          msgs.forEach(function (msg) {
            var deadline = new Date(msg.attachment.application.created_time);
            var Y = deadline.getFullYear() + '-';
            var M = (deadline.getMonth()+1 < 10 ? '0'+(deadline.getMonth()+1) : deadline.getMonth()+1) + '-';
            var D = deadline.getDate();
            msg.attachment.application.created_time = Y + M + D;

            // type 0=>别人申请未处理 1=>别人申请已同意 2=>别人申请已拒绝 3=>自己申请被同意 4=>自己申请被拒绝
            var type = msg.attachment.application.status;
            var title = '项目有新申请者';
            if (msg.attachment.application.applier.name == $scope.user.name) {
              type = type + 2;
              title = '您的申请已被处理';
            }
            $scope.messages.push({
              message: msg,
              type: type,
              title: title
            });

          });

          console.log($scope.messages);

        })
        .error(function () {

        });
    };
    fetch();


    $scope.approve = function (msg) {
      console.log(msg.message.attachment.application._id);
      ProjectSrv.approveApplication(msg.message.attachment.application._id)
        .success(function (data) {
          console.log('approve success!');
          console.log(data);
          fetch();
        })
        .error(function () {

        });
    };

    $scope.reject = function (msg) {
      ProjectSrv.rejectApplication(msg.message.attachment.application._id)
        .success(function (data) {
          console.log('reject success!');
          console.log(data);
          fetch();
        })
        .error(function () {

        });
    };
  });
