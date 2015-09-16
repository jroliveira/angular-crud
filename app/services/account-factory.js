(function () {
  'use strict';

  angular
    .module('angularCrud')
    .factory('Account', AccountFactory);

  AccountFactory.$inject = ['$resource'];

  function AccountFactory($resource) {
    return $resource('http://nancy-api.apphb.com/accounts/:id', {}, {
      edit: {
        method: 'PUT'
      }
    });
  }
})();