angular.module('myApp')
.service('pagination', ['$q', '$timeout', function ($q, $timeout){
            // return $http.get('https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/auth', { headers: { 'authorization': token}});
            var apiUrl = 'https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev';

    this.getDataForPage = function(pageNumber) {
        var url = apiUrl + '/api/transactions/all';

        var params = {
            page: pageNumber,
        }

        return $http.get(url, {params: params}).then((response) => {
            return response.data;
        }).catch((err) => {
            console.error(err);
        });

        // var itemsPerPage = 5;
        // var startIndex = (pageNumber - 1) * itemsPerPage;
        // var endIndex = startIndex + itemsPerPage;
        // var slicedData = data.slice(startIndex, endIndex);

        // var deferred = $q.defer();
        // $timeout(function() {
        //     deferred.resolve(slicedData);
        // }, 1000);

        // return deferred.promise;
    }

    this.createPage=function(data,rows){
        let len=data.length
        let itrations = Math.ceil(len/rows)
        let count=0
        let startIndex=0
        let endIndex=rows
        console.log(len,itrations,rows,data)
        let newArr=[]
        for(let i=0;i<itrations;i++){
            console.log('inside loop')
            let d=data.slice(startIndex,endIndex)
            newArr.push(d)
            console.log(d)
            startIndex+=rows
            endIndex+=rows
        }
     return newArr   
    }
}])