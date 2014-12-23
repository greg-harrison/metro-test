(function(){
    var app = angular.module("metroD3", ['ngResource', 'ngRoute']);

    app.config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvider
            .when("/", {
                templateUrl: "/partials/main",
                controller: "MainController"
            })
            .when("/githubUser/:username", {
                templateUrl: "/partials/githubUser",
                controller: "UserController"
            });
    });
}());

