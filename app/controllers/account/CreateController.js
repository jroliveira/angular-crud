(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('CreateController', CreateController);

  CreateController.$inject = ['AccountFactory', '$location'];

  function CreateController(AccountFactory, $location) {
    var vm = this;
    vm.account = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    vm.save = save;

    function save(account) {
      AccountFactory
        .create(account)
        .$promise
        .then(function () {
          $location.path('/contas');
        });
    }
  }
})();