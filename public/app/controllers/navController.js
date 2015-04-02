(function(){
    angular
        .module('metroD3')
        .controller('NavController', NavController)
        .directive('ghNavbar', NavbarLogic);

    function NavController($scope, $location) {
        $scope.isActive = function(route) {
            var string = $location.path().split('/')[1];
            var brokenString = '/' + string;
            return route === brokenString;
        };
    }

    function NavbarLogic() {
        return {
            templateUrl: '/partials/navbar'
        };
    }

}());

//Todo: Convert this Navbar Controller into a Directive! Done!