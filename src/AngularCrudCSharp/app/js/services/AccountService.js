define([], function () {
    "use strict";
    
    var service = ['$resource', function ($resource) {

        return $resource('/api/accounts/', {}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' }
        });

    }];

    return service;
});
