(function (){
  'use strict'

  angular.module('app')
    .component('photography', {
      templateUrl: '/js/templates/photography.html',
      controller: PhotographyController
    })
  function PhotographyController(){
    const vm = this

    vm.photography = [
      {title: "Shanghai, China", imageURL: "media/china/DSC_0855.jpg"},
      {title: "Portsalon, Ireland", imageURL: "media/ireland/DSC_2454.jpg"},
      {title: "Catedral de Sevilla, Sevilla, Spain", imageURL: "media/spain/DSCN0970.jpg"},
      {title: "Great Wall, Beijing, China", imageURL: "media/china/DSC_0228.jpg"},
      {title: "Sevilla, Spain", imageURL: "media/spain/DSCN0798.jpg"},
      {title: "Sevilla, Spain", imageURL: "media/spain/DSCN0911.jpg"},
      {title: "Twin Lakes, Colorado", imageURL: "media/aspen/DSC_3126.jpg"},
      {title: "Great Wall, Beijing, China", imageURL: "media/china/DSC_0266.jpg"},
      {title: "Maroon Bells, Aspen, Colorado", imageURL: "media/aspen/DSC_3291.jpg"},
      {title: "Belfast, Northern Ireland", imageURL: "media/ireland/DSC_2680.jpg"},
      {title: "Glacier National Park, Montana", imageURL: "media/montana/DSCN3238.jpg"},
      {title: "Granada, Spain", imageURL: "media/spain/DSCN1198.jpg"},
      {title: "Hong Kong", imageURL: "media/china/DSC_1363.jpg"},
      {title: "La Alhambra, Granada, Spain", imageURL: "media/spain/DSCN1228.jpg"},
      {title: "Catedral de Sevilla, Sevilla, Spain", imageURL: "media/spain/DSCN1406.jpg"},
      {title: "Phuket, Thailand", imageURL: "media/thailand/DSCN0623.jpg"},
      {title: "Belfast, Northern Ireland", imageURL: "media/ireland/DSCN0371.jpg"},
      {title: "Masai Mara, Kenya", imageURL: "media/kenya/DSCN0035.jpg"},
      {title: "Chicago, Illinois", imageURL: "media/usa/DSC_0024.jpg"},
      {title: "Masai Mara, Kenya", imageURL: "media/kenya/DSCN9647_2.jpg"},
    ]


    vm.$postLink = function(){
      console.log(this);
    }
  }
}())
