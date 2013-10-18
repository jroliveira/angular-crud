"use strict";

require.config({

    paths: {
        jQuery: 'libs/jquery/jquery',
        Underscore: 'libs/underscore/underscore',
        Angular: 'libs/angular/angular',
        order: 'libs/require/order',
        text: 'libs/require/text',
        templates: '../templates'
    },

    priority: [
        "jQuery",
        "Underscore",
        "Angular"
    ]

});

require(['require'], function (require) {

    require(['app'], function (App) {
        App.initialize();
    });

});
