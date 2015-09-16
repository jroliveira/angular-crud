(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('CreateController', CreateController);

  CreateController.$inject = ['Account', '$location', 'flash'];

  function CreateController(Account, $location, flash) {
    var vm = this;
    vm.account = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    vm.save = save;

    function save(account) {
      Account
        .save(account)
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