define([
    'order!libs/angular/angular-min',
    'order!libs/angular/angular-resource'],
function () {

    if (typeof _ != 'undefined') {
        _.noConflict();
    }

    if (typeof $ != 'undefined') {
        $.noConflict();
    }

    return angular;
});
