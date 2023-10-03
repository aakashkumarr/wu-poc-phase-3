// describe('searchdata component', function() {
//   var $componentController;
//   var $rootScope;
//   var $httpBackend;
//   var pagination;

//   beforeEach(module('searchdata'));
//   beforeEach(module('myApp'));

//   beforeEach(inject(function(_$componentController_, _$rootScope_, _$httpBackend_, _pagination_) {
//     $componentController = _$componentController_;
//     $rootScope = _$rootScope_;
//     $httpBackend = _$httpBackend_;
//     pagination = _pagination_;
//   }));

//   it('should initialize the component', function() {
//     var bindings = {
//       data: [],
//     };

//     var ctrl = $componentController('searchdata', { $scope: $rootScope }, bindings);

//     expect($rootScope.currentPage).toBe(0);
//     expect($rootScope.tableData).toEqual([]);
//     expect($rootScope.totalPages).toBe(0);
//   });

//   it('should fetch data and initialize properties', function() {
//     var bindings = {
//       data: [],
//     };

//     var ctrl = $componentController('searchdata', { $scope: $rootScope }, bindings);

//     var mockData = [{/* your mock data here */}];
//     $httpBackend.expectGET('http://localhost:3000/transactions').respond(200, mockData);

//     ctrl.$scope.$digest(); // Simulate digest cycle
//     $httpBackend.flush();

//     expect($rootScope.tableData).toEqual(pagination.createPage(mockData, 10));
//     expect($rootScope.totalPages).toBe($rootScope.tableData.length);
//   });

//   it('should handle "dataUpdated" event and fetch filtered data', function() {
//     var bindings = {
//       data: [],
//     };

//     var ctrl = $componentController('searchdata', { $scope: $rootScope }, bindings);

//     var mockData = [{/* your mock data here */}];
//     $httpBackend.expectGET('http://localhost:3000/transactions').respond(200, mockData);

//     ctrl.$scope.$digest(); // Simulate digest cycle
//     $httpBackend.flush();

//     var eventData = {/* your event data here */};
//     $httpBackend.expectGET('http://localhost:3000/transactions?query=params').respond(200, mockData);

//     $rootScope.$broadcast('dataUpdated', eventData);
//     $rootScope.$digest(); // Simulate digest cycle
//     $httpBackend.flush();

//     expect($rootScope.tableData).toEqual(pagination.createPage(mockData, 10));
//     expect($rootScope.totalPages).toBe($rootScope.tableData.length);
//     expect($rootScope.currentPage).toBe(0);
//   });

//   // Add more test cases as needed for your component's functions

//   afterEach(function() {
//     $httpBackend.verifyNoOutstandingExpectation();
//     $httpBackend.verifyNoOutstandingRequest();
//   });
// });
