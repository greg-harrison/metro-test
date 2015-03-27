(function(){
    angular
        .module('metroD3')
        .factory('metro', metro);

        function metro($http){

            var apiKey = '2qk7xs42np9szxmnbe4ef2x4';

            var getLineStations = function(line){
                return $http.get('http://api.wmata.com/Rail.svc/json/jStations?LineCode=' + line.short + '&api_key=' + apiKey)
                    .then(function(response){
                        return response.data.Stations;
                });
            };

            return {
                getLineStations: getLineStations
            };

        }

}());