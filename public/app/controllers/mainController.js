(function(){
    angular
        .module('metroD3')
        .controller('MainController', MainController);

    function MainController($scope) {
        $scope.title = 'Star Wars API';
        $scope.mainActiveTab = 'active';
        $scope.notExploding = "HELLO! It's not exploding!";
        $scope.isSelected = '-';
    }

}());
