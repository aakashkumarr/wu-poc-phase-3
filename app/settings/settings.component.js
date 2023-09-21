'use strict';

angular.
  module('settings').
  component('settings', {
    templateUrl: 'settings/settings.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      function SettingsController() {
        this.message = 'Settings works!'
      }
    ]
  });