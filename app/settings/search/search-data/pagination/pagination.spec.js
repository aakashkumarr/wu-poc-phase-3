describe('pagination component', function() {
    var $componentController;
    var $rootScope;
    var $compile;
    var $q;
    var paginationService;
  
    // Load the 'pagination' module before each test
    beforeEach(module('pagination'));
    beforeEach(module('myApp'));
  
    // Inject necessary services and modules
    beforeEach(inject(function(_$componentController_, _$rootScope_, _$compile_, _$q_, _pagination_) {
      $componentController = _$componentController_;
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      $q = _$q_;
      paginationService = _pagination_;
    }));
  
    it('should initialize the component', function() {
      var bindings = {
        currentPage: 1,
        totalPages: 10,
        onPageChange: angular.noop
      };
  
      var ctrl = $componentController('pagination', null, bindings);
  
      expect(ctrl.currentPage).toBe(1);
      expect(ctrl.totalPage).toBe(1);
      expect(ctrl.pageSize).toBe(20);
      expect(ctrl.rowsPerPage).toBe("10");
      expect(ctrl.pageItems).toBeUndefined();
    });
  
//     it('should update page items when currentPage changes', function() {
//       var bindings = {
//         currentPage: 1,
//         totalPages: 3,
//         onPageChange: angular.noop,
//         data: [1, 2, 3, 4, 5, 6]
//       };
  
//       var ctrl = $componentController('pagination', null, bindings);
  
//       // Simulate a change in currentPage
//       ctrl.currentPage = 2;
//       ctrl.updatePageitems();
//   console.log(ctrl)
//       expect(ctrl.pageItems).toEqual([3, 4, 5, 6]);
//     });
  
    // it('should handle next and prev functions correctly', function() {
    //   var bindings = {
    //     currentPage: 1,
    //     totalPages: 3,
    //     onPageChange: angular.noop
    //   };
  
    //   var ctrl = $componentController('pagination', null, bindings);
  
    //   // Simulate clicking next
    //   ctrl.currentPage = 1;
    //   ctrl.next();
    //   expect(ctrl.currentPage).toBe(2);
  
    //   // Simulate clicking prev
    //   ctrl.currentPage = 3;
    //   ctrl.prev();
    //   expect(ctrl.currentPage).toBe(2);
    // });
  
    // Add more test cases as needed for your component's functions
  
    it('should broadcast row change event', function() {
      var bindings = {
        currentPage: 1,
        totalPages: 3,
        onPageChange: angular.noop,
        rowsPerPage: "10"
      };
  
      var ctrl = $componentController('pagination', null, bindings);
  
      var broadcastedEvent = null;
  
      $rootScope.$on('changeTableRow', function(event, data) {
        broadcastedEvent = data;
      });
  
      ctrl.handleChange();
  
      expect(broadcastedEvent).toBe("10");
    });
  
    // Add more test cases as needed for event handling and other functionality
  
  });
  