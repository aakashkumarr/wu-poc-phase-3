describe('SearchController', function() {
  var $httpBackend, $componentController, controller;

  beforeEach(module('search'));

  beforeEach(inject(function(_$httpBackend_, _$componentController_) {
    $httpBackend = _$httpBackend_;
    $componentController = _$componentController_;
  }));

  beforeEach(function() {
    controller = $componentController('search');
  });

  it('should initialize the controller', function() {
    expect(controller).toBeDefined();
  });


  it('should log a message to the console on button click', function() {
    spyOn(console, 'log');
    controller.submitForm();
    expect(console.log).toHaveBeenCalledWith('button working');
  });

  // it('should fetch data and set options', function() {
  //   var controller = $componentController('search', null, {}); // Pass an empty object as the bindings
  
  //   var responseData = [
  //     { id: 1, name: 'Option 1' },
  //     { id: 2, name: 'Option 2' }
  //   ];
  
  //   $httpBackend.expectGET('http://localhost:3000/transactions').respond(200, responseData);
  
  //   // Manually trigger the initialization logic (e.g., call an init function)
  //   controller.init(); // Replace `init` with the actual initialization function name in your controller
  
  //   $httpBackend.flush();
  
  //   expect(controller.options).toEqual({
  //     id: ['1', '2'],
  //     name: ['Option 1', 'Option 2']
  //   });
  // });

  // it('should broadcast dataUpdated event with correct data', function() {
  // var $scope = {};
  // var controller = $componentController('search', { $scope: $scope });

  // controller.mtcn = '8488161883';
  // controller.date = '11/10/2022';
  // controller.direction = 'send';
  // controller.status = 'success';
  // controller.fixedTransaction = true;
  // controller.recordingCountry = 'India';
  // controller.payOut = 'USD';
  // controller.currency = 'Rupee';

  // spyOn($scope, '$broadcast');

  // controller.submitForm();

  // expect($scope.$broadcast).toHaveBeenCalledWith('dataUpdated', {
  //   mtcn: '8488161883',
  //   transDate: '11/10/2022',
  //   direction: 'send',
  //   status: 'success',
  //   fixedTransaction: true,
  //   recordingCountry: 'India',
  //   payOut: 'USD',
  //   currency: 'Rupee'
  // });
// });
});