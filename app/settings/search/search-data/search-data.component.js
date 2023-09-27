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

        controller: ['$scope','$rootScope','pagination', function SearchDataController($scope,$rootScope,pagination) {
            $scope.array = [
                {
                    "mctn": "8488161883",
                    "date": "11/10/2022",
                    "fixedTransaction": 3,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "transactionType": "Regular Outbound",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "9284516293",
                    "date": "2/1/2023",
                    "fixedTransaction": 7,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "transactionType": "Regular Outbound",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "1540418189",
                    "date": "10/10/2022",
                    "fixedTransaction": 8,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Failed",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "transactionType": "Regular Outbound",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "0108959864",
                    "date": "9/9/2023",
                    "fixedTransaction": 4,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "transactionType": "Regular Outbound",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "5937114019",
                    "date": "3/28/2023",
                    "fixedTransaction": 12,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Pending",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "0637647637",
                    "date": "12/21/2022",
                    "fixedTransaction": 7,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Failed",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "5501068656",
                    "date": "1/5/2023",
                    "fixedTransaction": 12,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "9701201205",
                    "date": "10/9/2022",
                    "fixedTransaction": 6,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "2604156458",
                    "date": "3/20/2023",
                    "fixedTransaction": 3,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "7623746545",
                    "date": "8/20/2023",
                    "fixedTransaction": 9,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Failed",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "2417593521",
                    "date": "10/21/2022",
                    "fixedTransaction": 10,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Failed",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "0728746425",
                    "date": "10/18/2022",
                    "fixedTransaction": 3,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Failed",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "5572592773",
                    "date": "8/3/2023",
                    "fixedTransaction": 9,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "9501058921",
                    "date": "8/16/2023",
                    "fixedTransaction": 6,
                    "recordingCountry": "India",
                    "payOutCountry": "United Arab Emirates",
                    "status": "Failed",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "0034207740",
                    "date": "8/24/2023",
                    "fixedTransaction": 9,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "1618087266",
                    "date": "6/2/2023",
                    "fixedTransaction": 6,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Success",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "1436176158",
                    "date": "1/27/2023",
                    "fixedTransaction": 7,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Pending",
                    "direction": "Send",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "3937933581",
                    "date": "3/4/2023",
                    "fixedTransaction": 5,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Pending",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "3079677838",
                    "date": "7/16/2023",
                    "fixedTransaction": 5,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Pending",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                },
                {
                    "mctn": "2542972087",
                    "date": "12/11/2022",
                    "fixedTransaction": 3,
                    "recordingCountry": "India",
                    "payOutCountry": "United States",
                    "status": "Pending",
                    "direction": "Received",
                    "sendingSideCurrency": "Rupee",
                    "settlementstatus": "Settled",
                    "importStatus": "Settlement Only",
                    "sendPrincipal": 200.1,
                    "payoutPrincipal": 10.99,
                    "clearPrincipal": 1.99,
                    "totalCharges": 300.32,
                    "recordingDate": "5/11/22",
                    "sendingcountry": "USA",
                    "clearprincipalLOC": 1.99,
                    "agentIncome": 532.12,
                    "recordingDateLOC": "5/2/11"
                }
            ]
            $scope.transDate = null;
            $scope.$on('dataUpdated', function (event, data) {
                console.log(data);
                // $scope.mtcn = data.mtcn;
                // data.transDate ? $scope.transDate = data.transDate : $scope.transDate = null;
                $scope.mtcn = data.mtcn ? data.mtcn : null,
                    $scope.transDate = data.transDate,
                    $scope.direction = data.direction,
                    $scope.status = data.status,
                    $scope.fixedTransaction = data.fixedTransaction,
                    $scope.recordingCountry = data.recordingCountry,
                    $scope.payOut = data.payOut,
                    $scope.currency = data.currency
                // Output: "Hello from Module A"
            });
$rootScope.$on("changeTableRow",function(event,row){
console.log("rownumber",row)
$scope.array=pagination.createPage($scope.array,row)[0]
})
            $scope.filter = function (row) {

                if ($scope.mtcn === row.mtcn || $scope.transDate === row.date || $scope.direction === row.direction || $scope.status === row.status || $scope.fixedTransaction === row.fixedTransaction || $scope.payOut === row.payOutCountry || $scope.recordingCountry === row.recordingCountry || $scope.currency === row.sendingSideCurrency) {
                    console.log($scope.row);

                    return true;
                }

            };

            $scope.popupVisible = true;

            $scope.popup = function (row) {
                $scope.popupVisible = true;
                console.log(row);
                $rootScope.$broadcast('popupEvent', row)
            };

            $scope.closePopup = function () {
                $scope.popupVisible = false;
            };

        }]

    });
