define([
    'Underscore',

    // Custom Services
    'services/AccountService'
], function (_, accountService) {
    "use strict";

    var services = {
        AccountService: accountService
    };

    var initialize = function (angModule) {
        _.each(services, function (service, name) {
            angModule.factory(name, service);
        });
    };

    return {
        initialize: initialize
    };
});
