(function() {
  'use strict';

  angular.module('booklist')
    .service('homeService', homeService);

    function homeService($http) {

      this.getBooks = function() {
        return $http.get('/books')
      }

      this.getSingleBook = function(id) {
        return $http.get(`/books/${id}`)
      }

      this.addBook = function(book) {
        return $http.post('/books', book)
      }

      this.updateBook = function(book) {
        return $http.patch(`/books/${book.id}`, book)
      }

      this.deleteBook = function(book) {
        console.log("Deleting", book.id);
        return $http.delete(`/books/${book.id}`)
      }

    }

}());
