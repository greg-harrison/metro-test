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
                    templateUrl: 'app/partials/main',
                    controller: 'mainController',
                    controllerAs: 'main'
                })
                .when('/githubUser/:username', {
                    templateUrl: 'app/partials/githubUser',
                    controller: 'UserController'
                })
                .when('/metrod3', {
                    templateUrl: 'app/partials/metrod3',
                    controller: 'MetroController'
                })
                .otherwise({
                    redirectTo: '/main'
                })
        }
}());

