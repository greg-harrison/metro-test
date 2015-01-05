(function(){

    var app = angular.module("metroD3");

    var MetroController = function($scope, metro) {

        $scope.selection = function (lineSearch) {
            $scope.line = lineSearch;
        };

        var onError = function (reason){
            $scope.error = "Could not fetch data" + reason;
        };

        $scope.metroActiveTab = "active";
        $scope.title = "Metro Line Search";
        metro.getLineStations($scope.line).then(onError);
    };

    app.controller("MetroController", MetroController);

}());