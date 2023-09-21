angular.module('myApp')
.service('searchdata', function ($http) {
    this.fetchData = function () {
        return $http.post('https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/transactions/all',{},{headers:{authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGY3M2QwMjI1ZTRlMWQ5YmVjMzI2YmIiLCJpYXQiOjE2OTUwMzg2NTgsImV4cCI6MTY5NTIxMTQ1OH0.rAAQ2gK9AKjuouCJIrbArKfcPp_O67wkl47v505ctks'}});
    }
})