'use strict';

// Define the `phonecatApp` module
angular.module('myApp', [
  'ngRoute',
  'home',
  'sidenav',
  'navbar',
  'settings',
  'search',
  'searchdata'
])
.service('AuthService', function() {})
.controller('myCtrl', ['$http', '$rootScope', 'AuthService', function($http, $rootScope,AuthService) {
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
