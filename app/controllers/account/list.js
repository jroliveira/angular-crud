(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('ListController', ListController);

  ListController.$inject = ['Account'];

  function ListController(Account) {
    var vm = this;
    vm.accounts = Account.query();
    vm.delete = destroy;

    function destroy(account) {
      Account
        .delete({
          id: account.id
        })
        .$promise
        .then(function () {
          vm.accounts = Account.query();
        });
    }
  }
})();