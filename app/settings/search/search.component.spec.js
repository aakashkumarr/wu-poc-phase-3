describe('SearchController', function() {
  var $componentController;
  var $rootScope;
  var $httpBackend;
  var controller;

  beforeEach(module('search'));

  beforeEach(inject(function(_$componentController_, _$rootScope_, _$httpBackend_) {
    $componentController = _$componentController_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(function() {
    controller = $componentController('search', {
      $http: $httpBackend,
      $scope: $rootScope.$new()
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  fit('should initialize the controller', function() {
    expect(controller).toBeDefined();
  });

  it('should call submitForm and broadcast dataUpdated event', function() {

    // var bindings= {};
    // var ctrl=$componentController('searc', null, bindings);


    var eventData = {
      mtcn: "123456",
      transDate: "2023-09-24",
      direction: 'send',
      status: 'paid',
      fixedTransaction: 'SEND',
      recordingCountry: 'USA',
      payOut: 'USA',
      currency: 'USD'
    };

    spyOn($rootScope, '$broadcast');
    // ctrl.submitForm(eventData);
  
    controller.submitForm();

    expect($rootScope.$broadcast).toHaveBeenCalledWith('dataUpdated', eventData);
   
  });

  // Add more test cases as needed

});