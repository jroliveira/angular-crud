(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('EditController', EditController);

  EditController.$inject = ['Account', '$location', '$routeParams', 'flash'];

  function EditController(Account, $location, $routeParams, flash) {
    var vm = this;
    vm.account = Account.get({
      id: $routeParams.id
    });
    vm.edit = edit;

    function edit(account) {
      Account
        .edit(account)
        .$promise
        .then(success, error);

      function success() {
        $location.path('/contas');
        flash('Conta salva com sucesso!');
      }

      function error() {
        flash('error', 'Erro ao atualizar a conta!');
      }
    }
  }
})();