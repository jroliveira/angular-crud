define([], function () {
    "use strict";

    var controller = ['$scope', 'AccountService', '$location', function($scope, AccountService, $location) {
        $scope.save = function() {
            AccountService.create($scope.account);
            $location.path('/contas');
        };
    }];

    return controller;
});
