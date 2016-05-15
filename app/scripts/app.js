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
    'ui.router'
  ])
  .value( "BASE_URL", "http://localhost:5000/" )
  .config(function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  })
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/auth/login");
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
      url: "/publish",
      templateUrl: 'views/app/pages/publish.html',
      controller: 'PublishCtrl'
    })
    .state('auth', {
      url: "/auth",
      templateUrl: 'views/auth/auth.html',
      controller: 'AuthCtrl'
    })
    .state('auth.login', {
      url: "/login",
      templateUrl: 'views/auth/login.html',
      controller: 'LoginCtrl'
    })
    .state('auth.signup', {
      url: "/signup",
      templateUrl: 'views/auth/signup.html',
      controller: 'SignupCtrl'
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

});
