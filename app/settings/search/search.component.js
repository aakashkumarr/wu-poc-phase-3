'use strict';

angular.
module('search').
component('search', {
  templateUrl: 'settings/search/search.template.html',
  // template:'<h1> hello </h1>',
  controller: ['$http','$scope',
    function SearchController($http,$scope) {

      
      this.submitForm = function () {
        $scope.$broadcast("dataUpdated",{
          mtcn: $scope.mtcn,
          transDate: $scope.date,
          direction:$scope.direction,
          status:$scope.status,
          fixedTransaction:$scope.fixedTransaction,
          recordingCountry:$scope.recordingCountry,
          payOut:$scope.payOut,
          currency:$scope.sendingSideCurrency
      });
        console.log("button working");

      }
      
    }
  ],
  // styleUrls:['search/search.css']
});