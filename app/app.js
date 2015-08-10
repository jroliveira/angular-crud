(function () {
  'use strict';

  angular
    .module('angularCrud', [
      'ngMaterial',
      'ngRoute',
      'ngResource',
      'ngMessages'
    ])
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home/index.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/contas', {
        templateUrl: 'partials/account/index.html',
        controller: 'ListController',
        controllerAs: 'vm'
      })
      .when('/conta/criar', {
        templateUrl: 'partials/account/create.html',
        controller: 'CreateController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();