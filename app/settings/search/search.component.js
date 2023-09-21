'use strict';

angular.
  module('search').
  component('search', {
    templateUrl: 'settings/search/search.template.html',
    // template:'<h1> hello </h1>',
    controller: [ '$http', '$rootScope', 'searchdata',
      function SearchController($http, $rootScope) {

        this.submitForm = function () {

        }
      }
    ]
  });
