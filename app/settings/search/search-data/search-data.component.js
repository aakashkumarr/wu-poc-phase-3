'use strict';

angular.
  module('searchdata').
  component('searchdata', {
    templateUrl: 'settings/search/search-data/search-data.template.html',
    // template: '<h1>Hello</h1>',
    bindings: {
        data: '='
    },
    // template:'<h1> hello </h1>',
    controller: [ 'searchdata',
      function SearchDataController( searchdata ) {

      }
    ]
});