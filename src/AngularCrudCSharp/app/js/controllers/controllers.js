define([
    'Underscore',

    // routing
    'routes/routes',

    // Application Controller
    'controllers/AppController',
    'controllers/HomeController',
    'controllers/AccountController'
], function (_, routes, appController, homeController, accountController) {
    "use strict";

    var controllers = {
        home: homeController,
        account: accountController
    };

    var setUpRoutes = function (angModule) {
        angModule.config(function ($routeProvider) {
            _.each(routes, function (value, key) {
                $routeProvider.when(
                    value.route,
                    {
                        template: value.template,
                        controller: value.controller,
                        title: value.title
                    }
                );
            });
            $routeProvider.otherwise({ redirectTo: routes.home.route });
        });
        
        angModule.run(function ($rootScope) {
            $rootScope.$on('$routeChangeSuccess');
        });
    };

    var initialize = function (angModule) {
        angModule.controller('AppController', appController);
        _.each(controllers, function (controller, name) {
            angModule.controller(name, controller);
        });
        setUpRoutes(angModule);
    };

    return {
        initialize: initialize
    };
});
