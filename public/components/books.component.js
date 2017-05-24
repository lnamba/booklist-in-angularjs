angular.module('booklist')
  .component('books', {
    templateUrl: 'books.html',
    bindings: {
      abook: '<',
      deletebook: '&',
      like: '&',
      dislike: '&',
      
    },
    controller: function() {

    }
  })
