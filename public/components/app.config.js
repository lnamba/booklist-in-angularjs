(function() {
  'use strict';

  angular.module('booklist').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/',
        component: 'homepage'
      })
      .state('edit', {
        url: '/books/:id/edit',
        component: 'editpage'
      })
      .state('viewdetails', {
        url: '/books/:id/view',
        component: 'viewpage'
      })

  }

}());
