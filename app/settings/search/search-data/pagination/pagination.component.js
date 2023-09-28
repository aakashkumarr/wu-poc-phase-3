
'use strict';

angular.
  module('pagination').
  component('pagination', {
    templateUrl: 'settings/search/search-data/pagination/pagination.template.html',
    // template:'<h1> hello </h1>',
    bindings: {
        currentPage: '=',
        totalPages: '=',
        onPageChange: '&'
    },
    controller: ['pagination','$rootScope',
      function PaginationController(pagination,$rootScope) {
        // this.message = 'pagination works...!'
        let self=this
        this.currentPage = 1;
        this.totalPage = 1;
        this.pageSize=20;
        this.updatePageitems=function(){
            let startIndex=(this.currentPage-1)*this.pageSize;
            this.pageItems=(this.data.slice(startIndex,startIndex+this.pageSize))
        }
        this.next=function(){
          $rootScope.$broadcast('nextRow',{})
        if(this.currentPage>this.numPages()){
            this.currentPage--;
            this.updatePageitems();
        }  
        }
        this.prev=function(){
          $rootScope.$broadcast('prevRow',{})
          if(this.currentPage<this.numPages()){
            this.currentPage++;
            this.updatePageitems();
        }  
        }
        this.setPage=function(page){
            if (page>=1 && page<=this.numPages()){
                this.currentPage=page;
                this.updatePageitems();
            }
        }
        this.numPages=function(){
            return Math.ceil(this.totaItems/this.pageSize)
        }
        // this.updatePageitems()
        // loadDataForPage(1);
        this.handleChange=function(e){
          console.log(self.rowsPerPage)
          $rootScope.$broadcast('changeTableRow',self.rowsPerPage)

        };
        this.loadDataForPage = function (pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
                loadDataForPage(pageNumber);
            }
        };

        function loadDataForPage (pageNumber) {
            // pagination.getDataForPage(pageNumber).then(function (data) {
            //     this.tableData = data;
            // });
        }
      }
    ]
  });