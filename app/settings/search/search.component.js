"use strict";

angular.module("search", []).component("search", {
  templateUrl: "settings/search/search.template.html",
  // template:'<h1> hello </h1>',
  controller: [
    "$http",
    "$scope",
    function SearchController($http, $scope) {
      $scope.options = {};
      $http.get("http://localhost:3000/transactions").then((res) => {
        console.log("fetch data:", res);
        $scope.array = res.data;
        $scope.options = mapOptions($scope.array);
        console.log($scope.options);
      });
      function mapOptions(data) {
        let options = {};
        for (let object of data) {
          for (let key in object) {
            if (typeof options[key] !== "object") {
              options[key] = {};
              options[key][object[key]] = object[key];
            } else {
              options[key][object[key]] = object[key];
            }
          }
        }
        for(let key in options){
          options[key]=Object.keys(options[key])
        }
        console.log("opston", options);
        return options;
      }

      this.submitForm = function () {
        $scope.$broadcast("dataUpdated", {
          mtcn: $scope.mtcn,
          transDate: $scope.date,
          direction: $scope.direction,
          status: $scope.status,
          fixedTransaction: $scope.fixedTransaction,
          recordingCountry: $scope.recordingCountry,
          payOut: $scope.payOut,
          currency: $scope.sendingSideCurrency,
        });
        console.log("button working");
      };
    },
  ],
  // styleUrls:['search/search.css']
});
