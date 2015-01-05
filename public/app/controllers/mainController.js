(function(){
    var app = angular.module("metroD3");

    var MainController = function($scope) {
        $scope.title = "Main Controller Active";
        $scope.mainActiveTab = "active";
        $scope.notExploding = "HEY! It's not exploding!";
    };

    app.controller("MainController", MainController);

}());
