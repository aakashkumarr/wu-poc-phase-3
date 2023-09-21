'use strict';

angular.
  module('login').
  component('login', {
    templateUrl: 'auth/login/login.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      "$routeParams",
    "$http","$rootScope","$location", 'AuthService',
    function LoginController($routeParams, $http, $rootScope,$location, AuthService) {
      this.login = function () {
        console.log(AuthService);
        AuthService.login({email: this.email, password: this.password}).then((response) => {
          console.log(response.data);
          AuthService.setToken(response.data);
          AuthService.getToken();

          $location.path(['/']);
        }).catch((err) => {
          console.error(err);
        });
        console.log("login called");
      };
      this.testEmail=function(){
        this.isEmailValid=this.email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)
      }
    },
    ]
  });