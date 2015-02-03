(function(){
    angular
        .module('metroD3', ['ngResource', 'ngRoute'])
        .config(config);

        function config($routeProvider, $locationProvider){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            //TODO refactor the Front End code for this app, NO MORE PARTIALS.
            //TODO Use directives!

            $routeProvider
                .when('/main', {
                    templateUrl: '/partials/main',
                    controller: 'MainController'
                })
                .when('/githubUser/:username', {
                    templateUrl: '/partials/githubUser',
                    controller: 'UserController'
                })
                .when('/metrod3', {
                    templateUrl: '/partials/metrod3',
                    controller: 'MetroController'
                })
                .otherwise({
                    redirectTo: '/main'
                })
        }
}());

