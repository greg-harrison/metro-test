(function(){

    var app = angular.module("metroD3");

    var NavController = function($scope, $location) {
        $scope.isActive = function(route) {
            console.log($location.path().substring(1));
            return route === $location.path();
        };
    };

    app.controller("NavController", NavController);

}());