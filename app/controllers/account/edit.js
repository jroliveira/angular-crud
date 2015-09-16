(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('EditController', EditController);

  EditController.$inject = ['Account', '$location', '$routeParams'];

  function EditController(Account, $location, $routeParams) {
    var vm = this;
    vm.account = Account.get({
      id: $routeParams.id
    });
    vm.edit = edit;

    function edit(account) {
      Account
        .edit(account)
        .$promise
        .then(function () {
          $location.path('/contas');
        });
    }
  }
})();