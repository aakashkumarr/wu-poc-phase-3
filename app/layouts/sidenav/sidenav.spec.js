describe('SidenavController', function() {
  var $componentController;

  beforeEach(module('sidenav'));

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should initialize activeLink as null', function() {
    var controller = $componentController('sidenav');

    expect(controller.activeLink).toBeNull();
  });

  it('should set the active link when setActive is called', function() {
    var controller = $componentController('sidenav');

    controller.setActive(1);

    expect(controller.activeLink).toBe(1);
  });

  it('should return true when isActive is called with active link', function() {
    var controller = $componentController('sidenav');

    controller.setActive(2);

    expect(controller.isActive(2)).toBe(true);
  });

  it('should return false when isActive is called with inactive link', function() {
    var controller = $componentController('sidenav');

    controller.setActive(2);

    expect(controller.isActive(1)).toBe(false);
  });
});