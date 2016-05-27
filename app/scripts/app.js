'use strict';

/**
 * @ngdoc overview
 * @name autoApp
 * @description
 * # autoApp
 *
 * Main module of the application.
 */
angular
  .module('autoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'sasrio.angular-material-sidenav'
  ])
  .value( "BASE_URL", "http://localhost:5000/" )

  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('myInterceptor')
  })

  // .config(function ($httpProvider) {
  //   $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  // })

  .config(function (ssSideNavSectionsProvider, $mdThemingProvider) {
    ssSideNavSectionsProvider.initWithSections([{
      id: 'toogle_1',
      type: 'heading',
      children: [{
        name: '项目管理',
        type: 'toggle',
        pages: [{
          id: 'toogle_1_link_1',
          name: '项目审核',
          state: 'admin.app.project'
        }, {
          id: 'toogle_1_link_2',
          name: '新建优秀项目展示',
          state: 'app'
        }, {
          id: 'toogle_1_link_3',
          name: '项目通过',
          state: 'app'
        }]
      },
        {
          name: '通知',
          type: 'toggle',
          pages: [{
            id: 'toogle_1_link_1',
            name: '新建通知',
            state: 'admin.app.project'
          }, {
            id: 'toogle_1_link_2',
            name: '通知管理',
            state: 'app'
          }]
        },
        {
          name: '用户',
          type: 'toggle',
          pages: [{
            id: 'toogle_1_link_1',
            name: '用户管理',
            state: 'admin.app.project'
          }, {
            id: 'toogle_1_link_2',
            name: '新建用户',
            state: 'app'
          }]
        }]
    }]);
    ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
  })


  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("app/info/personalInfo");
  //
  // Now set up the states
  $stateProvider
    .state('app', {
      url: '/app',
      templateUrl: 'views/app/navigation.html',
      controller: 'NavigationCtrl'
    })
    .state('app.home', {
      url: '/home',
      templateUrl: 'views/app/pages/home.html',
      controller: 'HomeCtrl'
    })
    .state('app.publish', {
      url: '/publish',
      templateUrl: 'views/app/pages/publish.html',
      controller: 'PublishCtrl'
    })

    .state('app.info', {
      url: "/info",
      templateUrl: 'views/app/pages/info/info.html',
      controller: 'InfoCtrl'
    })
    .state('app.info.personalInfo', {
      url: '/personalInfo',
      views: {
        'background': {
          templateUrl: 'views/background/backgroundb.html',
        },
        'content': {
          templateUrl: 'views/app/pages/info/personalinfo.html',
          controller: 'InfoCtrl'
        }
      }
    })
    .state('app.info.publishedProjects', {
      url: '/publishedProjects',
      views: {
        'background': {
          templateUrl: 'views/background/backgroundb.html',
        },
        'content': {
          templateUrl: 'views/app/pages/info/publishedProjects.html',
          controller: 'InfoCtrl'
        }
      }
    })
    .state('app.info.joinedProjects', {
      url: '/joinedProjects',
      views: {
        'background': {
          templateUrl: 'views/background/backgroundb.html',
        },
        'content': {
          templateUrl: 'views/app/pages/info/joinedProjects.html',
          controller: 'InfoCtrl'
        }
      }
    })

    .state('app.project',{
      url: '/project',
      template: '<div ui-view></div>'
    })

    .state('app.project.list',{
      url: '/list',
      templateUrl: 'views/app/pages/project/list.html',
      controller: 'ProjectListCtrl'
    })

    .state('app.project.detail',{
      url: '/detail/:project_id',
      templateUrl: 'views/app/pages/project/detail.html',
      controller: 'ProjectDetailCtrl'
    })


    .state('auth', {
      url: "/auth",
      templateUrl: 'views/auth/auth.html',
      controller: 'AuthCtrl'
    })
    .state('auth.login', {
      url: "/login",
      views: {
        'background': {
          templateUrl: 'views/background/backgrounda.html',
        },
        'content': {
          templateUrl: 'views/auth/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('auth.signup', {
      url: "/signup",
      views: {
        'background': {
          templateUrl: 'views/background/backgrounda.html',
        },
        'content': {
          templateUrl: 'views/auth/signup.html',
          controller: 'SignupCtrl'
        }
      }
    })




    .state('admin', {
      url:"/admin",
      templateUrl:'views/admin/authback.html',
      controller:'AdminBaseCtrl'
    })
    .state('admin.login', {
      url:"/login",
      templateUrl:'views/admin/login.html',
      controller:'AdminLoginCtrl'
    })

    .state('admin.app', {
      url:"/app",
      templateUrl:'views/admin/sidenav.html',
      controller:'AdminSidenavCtrl'
    })

    .state('admin.app.project', {
      url:"/project",
      templateUrl:'views/admin/checkproject.html',
      controller:'checkProjectCtrl'
    })


})

.run(function ($rootScope, Locals, TokenService) {
    $rootScope.user = Locals.getObject('user');
    TokenService.setToken(Locals.get('token'));
});
