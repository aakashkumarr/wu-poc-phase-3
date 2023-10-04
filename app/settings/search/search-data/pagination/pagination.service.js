angular.module('paginationService',[])
.service('pagination', ['$q', '$timeout', function ($q, $timeout){
            // return $http.get('https://shiny-space-lamp-wwv44r5xr44fvjxq-3000.app.github.dev/api/auth', { headers: { 'authorization': token}});

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