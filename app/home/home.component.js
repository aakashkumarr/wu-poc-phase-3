'use strict';

angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      function HomeController() {
        this.message = 'Home works...!'
      }
    ]
  });
