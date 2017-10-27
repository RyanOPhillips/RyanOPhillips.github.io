(function (){
  'use strict'

  angular.module('app')
    .component('projects', {
      templateUrl: '/js/templates/projects.html',
      controller: ProjectsController
    })
  function ProjectsController(){
    const vm = this
    vm.projects =[{title: "TravelBucket", description: "A mobile app which allows users to sign in via fingerprint, add to a travel bucket list and save details when items are checked off. Geolocation prompts the user to update the list when the appropriate distance is reached", imageURL: "media/icons/TravelBucketMockup copy.png", link: "https://github.com/RyanOPhillips/TravelBucket"},
    {title: "WaterTracker", description: "A mobile app which allows users to calculate how much water to drink per day based on body weight, and easily track progress towards daily goal", imageURL: "media/icons/TravelBucketMockup copy.png", link: "https://github.com/RyanOPhillips/WaterTracker"},
    {title: "Brew Mapper", description: "A web app that uses Google Maps API and BreweryDB API to locate the closest breweries in a given location", imageURL: "media/icons/brewmapper.jpg", link: "https://brew-mapper.firebaseapp.com/"},
    {title: "RunningSocial", description: "A mobile app using Swift and Apple Maps to allow users to create and map a run for others to join", imageURL: "media/icons/RunningSocialApp.jpg", link: "https://github.com/RunningSocial/RunningSocial"},
    {title: "Star Wars Reddit", description: "A web app using AngularJS to dynamically add, up-vote or down-vote, and comment on blog posts", imageURL: "media/icons/Star_Wars.png", link: "https://star-wars-reddit.firebaseapp.com/"},
    {title: "Movie Ratings", description: "A web app which allows a user to add new movies to a database and rate them as desired", imageURL: "media/icons/Movies.jpg", link:"https://moviecrud-ryan.herokuapp.com"},
]

  }
}())
