describe("searchdata", function () {
    beforeEach(module("searchdata"));
  
    describe("SearchDataController", function () {
      var $componentController;
      var ctrl;
      var $rootScope;
      var $scope;
  
      beforeEach(inject(function (_$componentController_, _$rootScope_, _$injector_) {
        $componentController = _$componentController_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
  
        ctrl = $componentController("searchdata");
      }));
  
      it("should initialize the message", function (done) {
        console.log(ctrl);
        expect(ctrl.message).toBe(" Search data works!");
        done();
      });

    //   it("should filter rows based on filter criteria", function (done) {
    //     var row = {
    //         mctn: "8488161883",
    //         date: "11/10/2022",
    //         fixedTransaction: 3,
    //         recordingCountry: "India",
    //         payOutCountry: "United States",
    //         status: "success",
    //         direction: "send",
    //         sendingSideCurrency: "Rupee"
    //     };

    //     $scope.mctn = '8488161883';
    //     $scope.date = "11/10/2022";

    //     var result = $scope.filter(row);

    //     expect(result).toBe(true);
    //   })
    });
  });
  