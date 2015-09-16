(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('ListController', ListController);

  ListController.$inject = ['Account', 'flash'];

  function ListController(Account, flash) {
    var vm = this;
    vm.accounts = Account.query();
    vm.delete = destroy;

    function destroy(account) {
      Account
        .delete({
          id: account.id
        })
        .$promise
        .then(success, error);

      function success() {
        vm.accounts = Account.query();
        flash('Conta deletada com sucesso!');
      }

      function error() {
        flash('error', 'Erro ao deletar a conta!');
      }
    }
  }
})();