describe("home", function () {
  beforeEach(module("home"));

  describe("HomeController", function () {
    var $componentController;
    var ctrl;
    var $compile

    beforeEach(inject(function (_$componentController_,) {
      $componentController = _$componentController_;

      ctrl = $componentController("home");
    }));

    it("should initialize the message", function (done) {
      console.log(ctrl);
      expect(ctrl.message).toBe("Home works...!");
      ctrl.message='updated'
      expect(ctrl.message).toBe('updated')
      done();
    });
    // it('shud have coming soon message',function(done){
    //     expect().toBeTruthy()
    // })
  });
});
