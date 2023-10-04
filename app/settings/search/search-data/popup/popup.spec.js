describe("welcmController", function () {
    var $rootScope, $controller, $scope;
  
    beforeEach(function () {
      module("popup");
  
      inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $scope = $rootScope.$new();
      });
    });
  
    it("should initialize scope variables", function () {
      $controller("welcmController", { $scope: $scope, $rootScope: $rootScope });
  
      expect($scope.formData).toBeNull();
      // You can add more expectations for other scope variables if needed
    });
  
    // it("should update jsonData on popupEvent", function () {
    //   $controller("welcmController", { $scope: $scope, $rootScope: $rootScope });
  
    //   var mockData = {
    //     mtcn: "12345",
    //     date: "2023-10-03",
    //     // Add more properties as needed
    //   };
  
    //   $rootScope.$broadcast("popupEvent", mockData);
  
    //   expect($scope.jsonData).toEqual(mockData);
    // });
  
    it("should clear formData on closePopup", function () {
      $controller("welcmController", { $scope: $scope, $rootScope: $rootScope });
  
      $scope.closePopup();
  
      expect($scope.formData).toBeNull();
    });
  
    // it("should export XML data", function () {
    //   $controller("welcmController", { $scope: $scope, $rootScope: $rootScope });
  
    //   // Mock jsonData
    //   $scope.jsonData = {
    //     mtcn: "12345",
    //     date: "2023-10-03",
    //     // Add more properties as needed
    //   };
  
    //   // Mock Blob and URL.createObjectURL
    //   var blobMock = {
    //     type: "text/xml",
    //   };
    //   spyOn(window, "Blob").and.returnValue(blobMock);
    //   spyOn(window.URL, "createObjectURL").and.returnValue("mockedURL");
  
    //   // Mock anchor element and click
    //   var aMock = {
    //     click: jasmine.createSpy("click"),
    //   };
    //   spyOn(document, "createElement").and.returnValue(aMock);
  
    //   // Call exportXml
    //   $scope.exportXml();
  
    //   expect(window.Blob).toHaveBeenCalledWith(
    //     [jasmine.any(String)],
    //     { type: "text/xml" }
    //   );
    //   expect(window.URL.createObjectURL).toHaveBeenCalledWith(blobMock);
    //   expect(aMock.href).toBe("mockedURL");
    //   expect(aMock.download).toBe("transaction.xml");
    //   expect(aMock.click).toHaveBeenCalled();
    // });
  
    // Add more test cases as needed for other controller functions and edge cases
  });
  