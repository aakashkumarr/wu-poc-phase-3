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
        this.message = 'search-data works!'
        this.tableData = [];

        this.loadData = function () {
          searchdata.fetchData().then((response) => {
            this.tableData = response.data;
            console.log(response.data);
          }).catch((err) => {
            console.error(err);
          });
        }

        this.loadData();

        this.searchdata = function(criteria) {
          return $http.post('https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/transactions/all', criteria).then((response) => {
            return response.data;
          }).catch((err) => {
            console.error(err);
          });
        }
      }
    ]
});