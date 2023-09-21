angular.module('myApp')
    .service('AuthService', [ '$window', '$http', '$rootScope', function($window, $http, $rootScope) {
        // var authService = {};
        this.as = 'abcd';
        this.user = { name: '' };

        this.getToken = function() {
            return $window.localStorage.getItem('jwtToken');
        };

        this.getUser = function() {
            var token = $window.localStorage.getItem('jwtToken'); 
            return $http.get('https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/auth', { headers: { 'authorization': token}});
        };

        this.setToken = function( token ) {
            $window.localStorage.setItem('jwtToken', token);
        }

        this.login = function( authData ) {
            return $http.post('https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/auth/login', {
                user: {
                    email: authData.email,
                    password: authData.password
                }
            });
        }

        // return authService;
    }])