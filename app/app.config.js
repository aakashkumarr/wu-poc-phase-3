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
          template: '<search class="search-component"></search>'
        }).
        when('/jsonToXml', {
          template: '<jsonToXml></jsonToXml>'
        }).
        otherwise('/');

    }
  ]);
