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
            .when("/githubUser/:username", {
                templateUrl: "/partials/githubUser",
                controller: "UserController"
            })
            .when("/metrod3", {
                templateUrl: "/partials/metrod3",
                controller: "MetroController"
            })
            .otherwise({
                redirectTo: "/main"
            })
    });
}());

