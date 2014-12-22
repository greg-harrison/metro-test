(function(){
    var app = angular.module("metroD3", ['ngResource', 'ngRoute']);

    app.config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvider
            .when("/main", {
                templateUrl: "/partials/main",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "/partials/user",
                controller: "UserController"
            })
            .otherwise("/");
    });
}());

