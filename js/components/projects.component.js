(function (){
  'use strict'

  angular.module('app')
    .component('projects', {
      templateUrl: '/js/templates/projects.html',
      controller: ProjectsController
    })
  function ProjectsController(){
    const vm = this
    vm.projects =[{title: "Title 1", description: "First project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 2", description: "Second project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 3", description: "Third project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"},
    {title: "Title 4", description: "Fourth project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 5", description: "Fifth project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 6", description: "Sixth project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 7", description: "Seventh project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"},
    {title: "Title 8", description: "Eighth project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}, {title: "Title 9", description: "Ninth project description", imageURL: "https://www.planwallpaper.com/static/images/cool_cat.jpg"}
]

  }
}())
