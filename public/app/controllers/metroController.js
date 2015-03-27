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

        $scope.lineColors = [{short: 'RD', long: 'Red Line', color: '#FF0000'},
                             {short: 'BL', long: 'Blue Line', color: '#0080FF'},
                             {short: 'GR', long: 'Green Line', color: '#2EFE9A'},
                             {short: 'SV', long: 'Silver Line', color: '#E6E6E6'},
                             {short: 'YL', long: 'Yellow Line', color: '#F2F5A9'},
                             {short: 'OR', long: 'Orange Line', color: '#F7BE81'}];

        $scope.selectedColor = $scope.lineColors[1];

        $scope.$watch('selectedColor', function (selectedColor) {
            $scope.line = $scope.selectedColor.long;
            $scope.titleColor = $scope.selectedColor.color;

            metro.getLineStations($scope.selectedColor).then(onLines, onError);
            //Want to update the COLOR OF THE TEXT based on the SELECTED LINE!

        });

        $scope.metroActiveTab = 'active';
        $scope.isSelected = '-';
        $scope.title = 'Metro Line Search';
    }

}());