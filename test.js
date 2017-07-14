var app = angular.module('my-app', [], function () { });
app.controller('AppController', function ($scope, $http) {
    $scope.test = function () {
        // _paq.push(['trackEvent', 'Test', 'Click', 'testuser']);
    };
    $scope.success = function () {
        $http({
            url: 'http://localhost/piwiktest/test.js?test=1',
            method: 'GET'
        }).success(function (data, header, config, status) {

        });

    };
})
oocl_piwik_tracker.setInterceptor(app);