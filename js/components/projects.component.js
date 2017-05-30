(function (){
  'use strict'

  angular.module('app')
    .component('projects', {
      templateUrl: '/js/templates/projects.html',
      controller: ProjectsController
    })
  function ProjectsController(){
    const vm = this
    vm.projects =[{title: "Brew Mapper", description: "A web app that uses Google Maps API and BreweryDB API to locate the closest breweries in a given location", imageURL: "media/icons/brewmapper.jpg", link: "https://brew-mapper.firebaseapp.com/"},
    {title: "RunningSocial", description: "A mobile app using Swift and Apple Maps to allow users to create and map a run for others to join", imageURL: "media/icons/RunningSocialApp.jpg", link: "https://github.com/RunningSocial/RunningSocial"},
    {title: "Star Wars Reddit", description: "A web app using AngularJS to dynamically add, up-vote or down-vote, and comment on blog posts", imageURL: "media/icons/Star_Wars.png", link: "https://star-wars-reddit.firebaseapp.com/"},
    {title: "Movie Ratings", description: "A web app which allows a user to add new movies to a database and rate them as desired", imageURL: "media/icons/Movies.jpg", link:"https://moviecrud-ryan.herokuapp.com"},
]

  }
}())
