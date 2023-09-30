"use strict";

angular.module("searchdata", []).component("searchdata", {
  templateUrl: "settings/search/search-data/search-data.template.html",

  // template: '<h1>Hello</h1>',

  bindings: {
    data: "=",
  },

  // template:'<h1> hello </h1>',

  controller: [
    "$scope",
    "$rootScope",
    "pagination",
    "$http",
    function SearchDataController($scope, $rootScope, pagination, $http) {
      let array = [];
      $scope.currentPage = 0;
      $http.get("http://localhost:3000/transactions").then((res) => {
        console.log("fetch data:", res);
        array = res.data;
        $scope.tableData = pagination.createPage(array, 10);
        $scope.totalPages = $scope.tableData.length;
        console.log($scope.tableData);
        // console.log("mapped options: ", mapOptions(array));
      });

      $scope.$on("dataUpdated", function (event, data) {
        let query = "";
        console.log(data);
        // $scope.mtcn = data.mtcn;
        // data.transDate ? $scope.transDate = data.transDate : $scope.transDate = null;
        console.log(data);
        for (let key in data) {
          if (data[key] == undefined) continue;
          if (key == "date") query += `${key}=${new Date(data[key].setHours(24)).toISOString().split('T')[0]}&`;
          else query += `${key}=${data[key]}&`;
        }
        console.log(query)
        $http.get(`http://localhost:3000/transactions?${query}`).then((res) => {
          console.log("fetch data:", res);
          array = res.data;
          $scope.tableData = pagination.createPage(array, 10);
          $scope.currentPage=0
          $scope.totalPages = $scope.tableData.length;
          console.log($scope.tableData);
          // console.log("mapped options: ", mapOptions(array));
        });
        // Output: "Hello from Module A"
      });
      $scope.tableData = pagination.createPage(array, 10);
      $scope.totalPages = $scope.tableData.length;
      $rootScope.$on("changeTableRow", function (event, row) {
        console.log("rownumber", row);
        $scope.tableData = pagination.createPage(array, parseInt(row));
        $scope.currentPage=0
        $scope.totalPages = $scope.tableData.length;
      });
      $rootScope.$on("nextRow", function (event, row) {
        console.log("rownumber", row);
        $scope.currentPage++;
      });
      $rootScope.$on("prevRow", function (event, row) {
        console.log("rownumber", row);
        $scope.currentPage--;
      });
      $scope.filter = function (row) {
        if (
          $scope.mtcn === row.mtcn ||
          $scope.transDate === row.date ||
          $scope.direction === row.direction ||
          $scope.status === row.status ||
          $scope.fixedTransaction === row.fixedTransaction ||
          $scope.payOut === row.payOutCountry ||
          $scope.recordingCountry === row.recordingCountry ||
          $scope.currency === row.sendingSideCurrency
        ) {
          console.log($scope.row);

          return true;
        }
      };

      $scope.popupVisible = true;

      $scope.popup = function (row) {
        $scope.popupVisible = true;
        console.log(row);
        $rootScope.$broadcast("popupEvent", row);
      };
      $scope.closePopup = function () {
        $scope.popupVisible = false;
      };
      $scope.convertJsonArrayToXml = function () {
        // Function to convert JSON object to XML string
        function jsonToXml(json) {
          var xml = "<transactions>";
          angular.forEach(json, function (item) {
            xml += "<transaction>";
            for (var key in item) {
              if (item.hasOwnProperty(key)) {
                xml += "<" + key + ">" + item[key] + "</" + key + ">\n";
              }
            }
            xml += "</transaction>";
          });
          xml += "</transactions>";
          return xml;
        }

        // Convert JSON to XML
        console.log("before json", array);
        let jsonData = array.map((d) => {
          delete d["$$hashKey"];
          return { ...d };
        });
        var xmlData =
          '<?xml version="1.0" encoding="UTF-8" ?>' + jsonToXml(jsonData);

        // Create a Blob containing the XML data
        var blob = new Blob([xmlData], { type: "application/xml" });

        // Create a temporary URL for the Blob
        var url = URL.createObjectURL(blob);

        // Create a link element for downloading the XML
        var a = document.createElement("a");
        a.href = url;
        a.download = "transactions.xml";

        // Trigger a click event on the link to start the download
        a.click();

        // Clean up by revoking the Blob URL
        URL.revokeObjectURL(url);
      };
    },
  ],
});
