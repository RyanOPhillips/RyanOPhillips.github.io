(function (){
  'use strict'

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false)
    $stateProvider
      .state({
        name: 'home',
        url:'/',
        component: 'home',
    })
      .state({
        name: 'about',
        url:'/about',
        component: 'about',
    })
      .state({
        name: 'resume',
        url:'/resume',
        component: 'resume',
    })
      .state({
        name: 'projects',
        url:'/projects',
        component: 'projects',
    })
      .state({
        name: 'photography',
        url:'/photography',
        component: 'photography',
    })
  }
}())
