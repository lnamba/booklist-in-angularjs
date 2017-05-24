angular.module('booklist')
  .component('editpage', {
    templateUrl: 'editpage.html',
    controller: controller
  })

  controller.$inject = ['homeService', '$state', '$stateParams'];

  function controller(homeService, $state, $stateParams) {
    var ctrl = this;
    var bookId = $stateParams.id;

    console.log($stateParams);
    ctrl.$onInit = function() {
      homeService.getSingleBook(bookId).then(function(response) {
        ctrl.editingBook = response.data.rows[0];
      })
    }

    ctrl.editBook = function() {
      homeService.updateBook(ctrl.editingBook).then(function() {
        homeService.getSingleBook(bookId).then(function(response) {
          ctrl.editingBook = response.data.rows[0];
          $state.go('home', {id:ctrl.editingBook.id})
        })
      })
    }

  }
