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
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/auth/login");
  //
  // Now set up the states
  $stateProvider
    .state('app', {
      url: "/app",
      templateUrl: "views/navigation.html",
      controller: 'NavigationCtrl'
    })
    .state('app.home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller: 'HomeCtrl'
    })
    .state('auth', {
      url: "/auth",
      templateUrl: "views/auth.html",
      controller: 'AuthCtrl'
    })
    .state('auth.login', {
      url: "/login",
      templateUrl: "views/login.html",
      controller: 'LoginCtrl'
    })
    .state('auth.signup', {
      url: "/signup",
      templateUrl: "views/signup.html",
      controller: 'SignupCtrl'
    })

});
