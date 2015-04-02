(function(){
    angular
        .module('metroD3', ['ngResource'])
        .factory('metro', metro);

        function metro(['$resource', function($resource) {}]){

            var apiKey = '2qk7xs42np9szxmnbe4ef2x4';

            var getLineStations = function(line){
                //return $http.get('http://api.wmata.com/Rail.svc/json/jStations?LineCode=' + line.short + '&api_key=' + apiKey)
                //    .then(function(response){
                //        return response.data.Stations;
                //});

                return $resource('/api/lines/', {}, {
                   query: {method: 'GET', params: {line: line.short}, isArray:true}
                });

            };

            return {
                getLineStations: getLineStations
            };

        }

}());