'use strict';

angular.
  module('jsonToXml').
  component('jsonToXml', {
    // templateUrl: 'jsonToXml/jsonToXml.template.html',
    template:'jsonToXml/jsonToXml.template.html',
    controller: ['$scope',
      function JsonToXmlController($scope) {
        $scope.jsonData = {}; // Your JSON data here

        $scope.convertToJson = function() {
          var xmlData = js2xmlparser.parse("root", $scope.jsonData);
          var blob = new Blob([xmlData], { type: "text/xml" });
          var url = window.URL.createObjectURL(blob);
      
          // Create a link element and trigger a click event to download the file
          var a = document.createElement('a');
          a.href = url;
          a.download = 'data.xml';
          a.click();
      
          window.URL.revokeObjectURL(url);
        };
      
      }
    ]
  });