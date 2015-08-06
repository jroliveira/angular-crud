define([
    'Underscore'
], function (_) {
    "use strict";

    var filters = {};

    var initialize = function (angModule) {
        _.each(filters, function (filter, name) {
            angModule.filter(name, filter);
        });
    };

    return {
        initialize: initialize
    };
});
