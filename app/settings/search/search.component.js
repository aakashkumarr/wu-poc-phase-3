'use strict';

angular.
  module('search').
  component('search', {
    templateUrl: 'settings/search/search.template.html',
    // template:'<h1> hello </h1>',
    controller: [ '$http', '$rootScope', 'searchdata',
      function SearchController($http, $rootScope, searchdata) {

        this.$onInit = function () {
          var self = this;

          $rootScope.$on('childEvent', function (event, data) {
            console.log('Received event: ', data);
          })
        }

        // this.txn = [];
        this.search = function () {
          const apiEndpoint = 'https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/transactions/all';

          $http.post(apiEndpoint, { }, { headers: { authorization: localStorage.getItem('jwtToken') }})
              .then(function(result) {
                // UPDATE THE TXN WITH THE RESULTS FROM API
                console.log(result);
                // this.txn = result.data;
              }).catch((err) => {
                console.error('Error fetching data: ', err);
              });      
          // alert('Search');
        }

        this. searchCriteria = {};

        this.submitForm = function () {
          searchdata.searchdata(this.searchCriteria).then((response) => {
            this.transactions = response;
          }).catch((err) => {
            console.error(err);
          });
        }
      }
    ]
  });
