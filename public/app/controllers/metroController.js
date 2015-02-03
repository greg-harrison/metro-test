(function(){

    angular
        .module('metroD3')
        .controller('MetroController', MetroController);

        function MetroController($scope, metro) {

        var onLines = function (data){
            $scope.stations = data;
        };

        var onError = function (reason){
            $scope.error = 'Could not fetch data' + reason;
        };

        $scope.selection = function (lineSearch) {
            $scope.line = lineSearch;
            metro.getLineStations($scope.line).then(onLines, onError);
            //Want to update the COLOR OF THE TEXT based on the SELECTED LINE!
        };

        $scope.lineColors = {'RD': 'Red Line', 'BL': 'Blue Line', 'GR': 'Green Line', 'SV': 'Silver Line', 'YL': 'Yellow Line', 'OR': 'Orange Line'};


        $scope.metroActiveTab = 'active';
        $scope.isSelected = '-';
        $scope.title = 'Metro Line Search';
    }

}());