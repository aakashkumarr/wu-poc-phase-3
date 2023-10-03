describe('pagination service', function () {
    var paginationService;
    let testData = [{ "id": 1, "mtcn": "7463556191", "date": "2023-01-17", "fixedTransaction": 13, "recordingCountry": "Burkina Faso", "recordingCountryCode": "BF", "payOutCountry": "China", "payOutCountryCode": "CN", "status": "unpaid", "direction": "inbound", "sendingSideCurrency": "Franc", "sendingSideCurrencyCode": "XOF", "transactionType": "Regular Outbound", "settlementStatus": "Unsettled", "importStatus": "Settlement Only", "sendPrincipal": 3.47, "payoutPrincipal": 11.5, "clearPrincipal": 2.69, "totalCharges": 254.73, "recordingDate": "2023-05-24", "clearprincipalLOC": 0.98, "agentIncome": 708.53, "recordingDateLOC": "2023-01-18", "sendingSideCountry": "Thailand", "sendingSideCountryCode": "TH" },
    { "id": 2, "mtcn": "9380401461", "date": "2023-09-18", "fixedTransaction": 5, "recordingCountry": "Venezuela", "recordingCountryCode": "VE", "payOutCountry": "Brazil", "payOutCountryCode": "BR", "status": "paid", "direction": "outbound", "sendingSideCurrency": "Bolivar", "sendingSideCurrencyCode": "VEF", "transactionType": "Regular Inbound", "settlementStatus": "Settled", "importStatus": "Settlement Only", "sendPrincipal": 1.14, "payoutPrincipal": 10.37, "clearPrincipal": 2.44, "totalCharges": 347.18, "recordingDate": "2023-05-23", "clearprincipalLOC": 2.84, "agentIncome": 435.94, "recordingDateLOC": "2022-12-25", "sendingSideCountry": "Bulgaria", "sendingSideCountryCode": "BG" },
    { "id": 3, "mtcn": "7771210564", "date": "2023-07-17", "fixedTransaction": 9, "recordingCountry": "Indonesia", "recordingCountryCode": "ID", "payOutCountry": "Brazil", "payOutCountryCode": "BR", "status": "paid", "direction": "outbound", "sendingSideCurrency": "Rupiah", "sendingSideCurrencyCode": "IDR", "transactionType": "Regular Outbound", "settlementStatus": "Unsettled", "importStatus": "Settlement Only", "sendPrincipal": 2.91, "payoutPrincipal": 5.89, "clearPrincipal": 0.48, "totalCharges": 242.33, "recordingDate": "2023-02-08", "clearprincipalLOC": 1.15, "agentIncome": 433.81, "recordingDateLOC": "2023-07-27", "sendingSideCountry": "China", "sendingSideCountryCode": "CN" },
    { "id": 4, "mtcn": "7658103116", "date": "2023-08-29", "fixedTransaction": 6, "recordingCountry": "Poland", "recordingCountryCode": "PL", "payOutCountry": "Russia", "payOutCountryCode": "RU", "status": "unpaid", "direction": "inbound", "sendingSideCurrency": "Zloty", "sendingSideCurrencyCode": "PLN", "transactionType": "Regular Inbound", "settlementStatus": "Unsettled", "importStatus": "Settlement Only", "sendPrincipal": 4.61, "payoutPrincipal": 7.99, "clearPrincipal": 3.88, "totalCharges": 199.34, "recordingDate": "2023-08-24", "clearprincipalLOC": 1.95, "agentIncome": 413.76, "recordingDateLOC": "2023-06-26", "sendingSideCountry": "Poland", "sendingSideCountryCode": "PL" },
    { "id": 5, "mtcn": "4942213099", "date": "2023-04-06", "fixedTransaction": 3, "recordingCountry": "Poland", "recordingCountryCode": "PL", "payOutCountry": "China", "payOutCountryCode": "CN", "status": "paid", "direction": "outbound", "sendingSideCurrency": "Zloty", "sendingSideCurrencyCode": "PLN", "transactionType": "Regular Outbound", "settlementStatus": "Settled", "importStatus": "Settlement Only", "sendPrincipal": 4.4, "payoutPrincipal": 5.04, "clearPrincipal": 0.63, "totalCharges": 107.66, "recordingDate": "2022-12-02", "clearprincipalLOC": 1.93, "agentIncome": 569.15, "recordingDateLOC": "2022-12-08", "sendingSideCountry": "Japan", "sendingSideCountryCode": "JP" },
    { "id": 6, "mtcn": "9326362052", "date": "2023-07-08", "fixedTransaction": 4, "recordingCountry": "Argentina", "recordingCountryCode": "AR", "payOutCountry": "Philippines", "payOutCountryCode": "PH", "status": "unpaid", "direction": "inbound", "sendingSideCurrency": "Peso", "sendingSideCurrencyCode": "ARS", "transactionType": "Regular Outbound", "settlementStatus": "Unsettled", "importStatus": "Settlement Only", "sendPrincipal": 2.81, "payoutPrincipal": 7.59, "clearPrincipal": 0.65, "totalCharges": 475.79, "recordingDate": "2023-09-22", "clearprincipalLOC": 4.21, "agentIncome": 580.92, "recordingDateLOC": "2023-01-19", "sendingSideCountry": "China", "sendingSideCountryCode": "CN" }]

    // Load the 'myApp' module before each test
    beforeEach(module('myApp'));

    // Inject the 'pagination' service
    beforeEach(inject(function (_pagination_) {
        paginationService = _pagination_;
    }));

    it('should create pages correctly', function () {
        var data = testData;
        var rows = 3;

        var result = paginationService.createPage(data, rows);

        // Check if the result is an array
        expect(Array.isArray(result)).toBe(true);

        // Check if the number of pages is calculated correctly
        expect(result.length).toBe(Math.ceil(data.length / rows));

        // Check if each page has the correct number of items
        for (var i = 0; i < result.length; i++) {
            var page = result[i];
            expect(page.length).toBe(rows);
        }
    });
});
