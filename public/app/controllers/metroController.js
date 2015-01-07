(function(){

    var app = angular.module("metroD3");

    var MetroController = function($scope, metro) {

        var onLines = function (data){
            $scope.stations = data;
        };

        var onError = function (reason){
            $scope.error = "Could not fetch data" + reason;
        };

        $scope.selection = function (lineSearch) {
            $scope.line = lineSearch;
            metro.getLineStations($scope.line).then(onLines, onError);
        };

        $scope.lineColors = {"RD": "Red Line", "BL": "Blue Line", "GR": "Green Line", "SV": "Silver Line", "YL": "Yellow Line", "OR": "Orange Line"};

        $scope.metroActiveTab = "active";
        $scope.title = "Metro Line Search";
    };

    app.controller("MetroController", MetroController);

}());