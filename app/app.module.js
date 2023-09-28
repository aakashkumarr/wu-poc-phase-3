'use strict';

// Define the `phonecatApp` module
angular.module('myApp', [
  'ngRoute',
  'home',
  'navbar',
 'sidenav',
  'settings',
  'search',
  'searchdata',
  'pagination'
])
.service('AuthService', function() {})
.controller('myCtrl', ['$http', '$rootScope', 'AuthService','$location', function($http, $rootScope,AuthService,$location) {
  this.currentPath = $location.path();

  this.showHome = function() {
    console.log(this.currentPath);
    return this.currentPath === '/';
  };

  this.showSettings = function() {
    console.log(this.currentPath);
    return this.currentPath === '/settings';
  };

  this.showSearch = function() {
    console.log(this.currentPath);
    return this.currentPath === '/settings/search';
  };

  this.getData = function() {
    $http.get('https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/', {
      headers: {
        Authorization: 'Bearer ' + AuthService.getToken()
      }
    }).then((response) => {
      this.token=response.data
      $rootScope.token=this.token
      // $rootScope.isAuthenticated=true
      // $location.path(['/'])
      localStorage.setItem('token',this.token)
    }).catch((err) => {
      console.error(err);
    });
  }
}])
