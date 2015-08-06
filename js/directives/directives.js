define([
    'jQuery',
    'Underscore',
    'Angular'
], function ($, _) {
    "use strict";

    var directives = {};

    var initialize = function (angModule) {
        _.each(directives, function (filter, name) {
            angModule.directive(name, filter);
        });
    };

    return {
        initialize: initialize
    };
});
