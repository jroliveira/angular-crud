define(['routes/routes'], function (routes) {
    "use strict";

    var appController = ['$scope', function ($scope) {
        $scope.navigation = routes;
    }];

    return appController;
});
