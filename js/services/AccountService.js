define([], function () {
    "use strict";
    
    var service = ['$resource', function ($resource) {

        return $resource('http://nancy-api.apphb.com/accounts/', {}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' }
        });

    }];

    return service;
});
