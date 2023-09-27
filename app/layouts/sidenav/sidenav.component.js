'use strict';

angular.
  module('sidenav').
  component('sidenav', {
    templateUrl: 'layouts/sidenav/sidenav.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      function SidenavController() {
        this.activeLink = null;

       this.setActive = function(index){
           this.activeLink = index
        }

       this.isActive = function(index){
        // console.log(this.activeLink);
            return this.activeLink === index;
          
        }
      }
    ]
  });