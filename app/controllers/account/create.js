(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('CreateController', CreateController);

  CreateController.$inject = ['Account', '$location'];

  function CreateController(Account, $location) {
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
        .then(function () {
          $location.path('/contas');
        });
    }
  }
})();