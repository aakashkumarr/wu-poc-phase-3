'use strict';

angular.
  module('navbar1').
  component('navbar1', {
    templateUrl: 'layouts/navbar1/navbar1.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      function Navbar1Controller() {
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