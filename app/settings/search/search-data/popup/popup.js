var app = angular.module("myApp");

//Welcome Controller
app.controller("welcmController", [
  "$scope",
  "$rootScope",
  function ($scope, $rootScope) {
    $scope.formData = null;
    $scope.jsonData = {
      mctn: "",
      date: "",
      fixedTransaction: "",
      recordingCountry: "",
      payOutCountry: "",
      status: "",
      direction: "",
      sendingSideCurrency: "",
      settlementstatus: "",
      importStatus: "",
      sendPrincipal: "",
      payoutPrincipal: "",
      clearPrincipal: "",
      totalCharges: "",
      recordingDate: "",
      sendingcountry: "",
      clearprincipalLOC: "",
      agentIncome: "",
      recordingDateLOC: "",
    };
    //  $scope.popupVisible = true;
    $rootScope.$on("popupEvent", function (event, data) {
      console.log("popupEvent Data:", data);
      $scope.formData = data;
      $scope.jsonData = {
        mtcn: data.mtcn,
        date: data.date,
        fixedTransaction: data.fixedTransaction,
        recordingCountry: data.recordingCountry,
        payOutCountry: data.payOutCountry,
        status: data.status,
        direction: data.direction,
        sendingSideCurrency: data.sendingSideCurrency,
        settlementStatus: data.settlementStatus,
        importStatus: data.importStatus,
        sendPrincipal: data.sendPrincipal,
        payoutPrincipal: data.payoutPrincipal,
        clearPrincipal: data.clearPrincipal,
        totalCharges: data.totalCharges,
        recordingDate: data.recordingDate,
        sendingSideCountry: data.sendingSideCountry,
        clearprincipalLOC: data.clearprincipalLOC,
        agentIncome: data.agentIncome,
        recordingDateLOC: data.recordingDateLOC,
      };
      console.log("jsondata", $scope.jsonData);
    });
    $scope.popup = function (row) {
      //  $scope.popupVisible = true;
      console.log("popup click", row);
    };

    $scope.closePopup = function () {
      console.log("popup close");
      $scope.formData = null;
      //  $scope.popupVisible = false;
    };

    $scope.exportXml = function () {
      console.log("xml created");
      console.log($scope.jsonData);

      var json = $scope.jsonData;

      // Create an XML string manually from JSON
      var xml = jsonToXml(json);

      // Create a Blob from the XML content
      var blob = new Blob([xml], { type: "text/xml" });

      // Create a temporary URL for the Blob
      var url = window.URL.createObjectURL(blob);

      // Create a temporary <a> element to trigger the download
      var a = document.createElement("a");
      a.href = url;

      a.download = "transaction.xml"; // Specify the filename for the downloaded file

      // Trigger a click event on the <a> element to initiate the download
      a.click();

      // Clean up by revoking the object URL
      window.URL.revokeObjectURL(url);
    };

    // Function to convert JSON to XML manually
    function jsonToXml(json) {
      var xml = '<?xml version="1.0" encoding="UTF-8" ?>\n';

      xml += "<transaction>\n";

      for (var key in json) {
        if (json.hasOwnProperty(key)) {
          xml += "<" + key + ">" + json[key] + "</" + key + ">\n";
        }
      }

      xml += "</transaction>";
      return xml;
    }
  },
]);
