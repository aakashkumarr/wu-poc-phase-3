'use strict';

angular.
  module('settings', []).
  component('settings', {
    templateUrl: 'settings/settings.template.html',
    // template:'<h1> hello </h1>',
    controller: ["$location",
      function SettingsController($location) {
        // this.currentPath = $location.path();

        this.showHome = function() {
          // console.log(this.currentPath());
          return $location.path() === '/';
        };

        this.showSettings = function() {
          console.log($location.path());
          return $location.path() === '/settings';
        };

        this.showSearch = function() {
          console.log($location.path());
          return $location.path() === '/settings/search';
        };

      }
    ]
  });