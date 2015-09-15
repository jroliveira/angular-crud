(function () {
  'use strict';

  angular
    .module('angularCrud')
    .factory('AccountFactory', AccountFactory);

  AccountFactory.$inject = ['$resource'];

  function AccountFactory($resource) {
    return $resource('http://nancy-api.apphb.com/accounts/', {}, {
      query: {
        method: 'GET',
        isArray: true
      },
      create: {
        method: 'POST'
      }
    });
  }
})();