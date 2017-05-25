(function (){
  'use strict'

  angular.module('app')
    .component('home',  {
      templateUrl: '/js/templates/home.html',
      controller: HomeController
    })
  function HomeController($anchorScroll){
    this.goToBottom = function(){
      $anchorScroll();
    }

  }
}())
