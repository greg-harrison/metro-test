(function(){
    angular
        .module('metroD3')
        .controller('NavController', NavController);

    function NavController($scope, $location) {
        $scope.isActive = function(route) {
            var string = $location.path().split('/')[1];
            var brokenString = '/' + string;
            return route === brokenString;
        };
    }

}());

//Todo: Convert this Navbar Controller into a Directive!