describe('SettingsController', function() {
  var $componentController, $location;

  beforeEach(module('settings'));

  beforeEach(inject(function(_$componentController_, _$location_) {
    $componentController = _$componentController_;
    $location = _$location_;
  }));

  it('should show the Home link when the current path is "/"', function() {
    $location.path('/');
    var controller = $componentController('settings');

    expect(controller.showHome()).toBe(true);
    expect(controller.showSettings()).toBe(false);
    expect(controller.showSearch()).toBe(false);
  });

  it('should show the Settings link when the current path is "/settings"', function() {
    $location.path('/settings');
    var controller = $componentController('settings');

    expect(controller.showHome()).toBe(false);
    expect(controller.showSettings()).toBe(true);
    expect(controller.showSearch()).toBe(false);
  });

  it('should show the Transaction Search link when the current path is "/settings/search"', function() {
    $location.path('/settings/search');
    var controller = $componentController('settings');

    expect(controller.showHome()).toBe(false);
    expect(controller.showSettings()).toBe(false);
    expect(controller.showSearch()).toBe(true);
  });
});