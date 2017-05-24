angular.module('booklist')
  .component('homepage', {
    templateUrl: 'homepage.html',
    controller: controller,
  })

  controller.$inject = ['homeService'];

  function controller(homeService) {
    var ctrl = this;

    ctrl.$onInit = function() {
      homeService.getBooks().then(function(response) {
        console.log(response.data.rows);
        ctrl.books = response.data.rows;
      });
    }

    ctrl.addBook = function() {
      homeService.addBook(ctrl.book).then(function(response) {
        console.log(response.data);
        ctrl.books.push(response.data.rows[0])
        ctrl.book = null;
      })
    }

    ctrl.deletebook = function(book) {
      console.log("hearing delete button");
      homeService.deleteBook(book).then(function() {
        console.log('heard');
        ctrl.books.map(function(i, ind) {
          if (book.id === i.id) {
            ctrl.books.splice(ind, 1)
          }
        })
      })
    }

    ctrl.like = function(book) {
      var index = ctrl.books.indexOf(book);
      book.likes++;
      console.log(book);
      homeService.updateBook(book).then(function(res) {
        console.log(res.data[0]);
        ctrl.books[index] = res.data[0]
      })
    }

    ctrl.dislike = function(book) {
      var index = ctrl.books.indexOf(book);
      book.dislikes++;
      homeService.updateBook(book).then(function(response) {
        console.log(response.data[0]);
        ctrl.books[index] = response.data[0]
      })
    }

    

  }
