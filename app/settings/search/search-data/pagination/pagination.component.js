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

        this.next=function(){
          $rootScope.$broadcast('nextRow',{})
        }
        this.prev=function(){
          $rootScope.$broadcast('prevRow',{})
        }
        loadDataForPage(1);
        this.handleChange=function(e){
          console.log(self.rowsPerPage)
          $rootScope.$broadcast('changeTableRow',self.rowsPerPage)
        }
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
