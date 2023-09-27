'use strict';

angular.
  module('navbar').
  component('navbar', {
    templateUrl: 'layouts/navbar/navbar.template.html',
    // template:'<h1> hello </h1>',
    controller: [ 'AuthService', '$rootScope', '$routeParams', '$location', '$timeout',
      function NavbarController(AuthService, $rootScope, $routeParams, $location, $timeout) {
        // this.user = { name: ''};
        // $rootScope.$on('$locationChangeSuccess', function () {
        //   AuthService.getUser().then((response) => {
        //     if(response.data !== null){
        //       this.user = response.data;
        //       console.log("Response Data: ", this.user);
        //       // this.hideAuth = $rootScope.token;
        //       // console.log(this.hideAuth, newUrl, oldUrl);
        //     }
        //   }).catch((err) => {
        //     console.error(err);
        //   });
        // })
        // this.logout = function () {
        //   this.hideAuth = null;
        //   $rootScope.token = null;
        //   localStorage.removeItem("token");
        //   $location.path(["/login"]);
        // };
      }
    ]
  });