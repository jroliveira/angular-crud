define([
    'jQuery',
    'Underscore',
    'Angular',

    // Application Files
    'services/services',
    'directives/directives',
    'filters/filters',
    'controllers/controllers'
], function ($, _, angular, services, directives, filters, controllers) {
    "use strict";

    var initialize = function () {
        var mainModule = angular.module('myApp', ['ngResource']);
        services.initialize(mainModule);
        directives.initialize(mainModule);
        filters.initialize(mainModule);
        controllers.initialize(mainModule);

        angular.bootstrap(window.document, ['myApp']);
    };

    return {
        initialize: initialize
    };
});
