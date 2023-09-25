'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<home></home>'
        }).
        when('/settings', {
          template: '<settings></settings>'
        }).
        when('/settings/search', {
          template: '<search></search>'
        }).
        otherwise('/home');
    }
  ]);
