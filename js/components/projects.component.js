(function (){
  'use strict'

  angular.module('app')
    .component('projects', {
      templateUrl: '/js/templates/projects.html',
      controller: ProjectsController
    })
  function ProjectsController(){
    const vm = this
    vm.projects =[{title: "Title 1", description: "First project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 2", description: "Second project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 3", description: "Third project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}]

  }
}())
