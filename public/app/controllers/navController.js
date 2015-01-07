(function(){

    var app = angular.module("metroD3");

    var NavController = function($scope, $location) {
        $scope.isActive = function(route) {
            var string = $location.path().split('/')[1];
            var brokenString = "/" + string;
            return route === brokenString;
        };
    };

    app.controller("NavController", NavController);

}());