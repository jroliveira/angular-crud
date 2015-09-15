(function () {
  'use strict';

  angular
    .module('angularCrud')
    .controller('ListController', ListController);

  ListController.$inject = ['AccountFactory'];

  function ListController(AccountFactory) {
    var vm = this;
    vm.accounts = AccountFactory.query();
  }
})();