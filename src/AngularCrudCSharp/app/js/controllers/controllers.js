define([
    'Underscore',

    // routing
    'routes/routes',

    // Application Controller
    'controllers/AppController',
    'controllers/home/IndexController',
    'controllers/account/IndexController',
    'controllers/account/SaveController'
], function (
    _,
    routes,
    appController,
    homeController,
    accountsController,
    saveAccountController
) {
    "use strict";

    var controllers = {
        home: homeController,
        accounts: accountsController,
        saveAccount: saveAccountController
    };

    var setUpRoutes = function (angular) {
        angular.config(function ($routeProvider) {
            _.each(routes, function (value, key) {
                $routeProvider.when(value.route, {
                        template: value.template,
                        controller: value.controller,
                        title: value.title
                    }
                );
            });
            
            $routeProvider.otherwise({ redirectTo: routes.home.route });
        });

        angular.run(function ($rootScope) {
            $rootScope.$on('$routeChangeSuccess');
        });
    };

    var initialize = function (angular) {
        angular.controller('AppController', appController);
        
        _.each(controllers, function (value, key) {
            angular.controller(key, value);
        });
        
        setUpRoutes(angular);
    };

    return {
        initialize: initialize
    };
});
