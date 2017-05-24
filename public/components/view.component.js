angular.module('booklist')
  .component('viewpage', {
    templateUrl: 'viewpage.html',
    controller: controller
  })

  controller.$inject = ['homeService', '$stateParams'];

  function controller(homeService, $stateParams) {
    var ctrl = this;
    var id = +$stateParams.id;

    ctrl.$onInit = function() {
      homeService.getSingleBook(id).then(function(response) {
        ctrl.selectedBook = response.data.rows[0];
      })
    }
  }
