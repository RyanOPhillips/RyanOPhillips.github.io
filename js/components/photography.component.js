(function (){
  'use strict'

  angular.module('app')
    .component('photography', {
      templateUrl: '/js/templates/photography.html',
      controller: PhotographyController
    })
  function PhotographyController(){
    const vm = this

    vm.photography = [{title: "Sevilla, Spain", imageURL: "media/spain/DSCN0798.jpg"}, {title: "Title 2", imageURL: "media/spain/DSCN0911.jpg"}, {title: "Title 3", imageURL: "media/spain/DSCN0970.jpg"}, {title: "Title 4", imageURL: "media/spain/DSCN0970.jpg"}, {title: "Title 5", imageURL: "media/spain/DSCN0798.jpg"}, {title: "Title 6", imageURL: "media/spain/DSCN0911.jpg"}]


    vm.$postLink = function(){
      console.log(this);
    }
  }
}())
