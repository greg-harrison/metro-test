(function(){

    var metro = function($http){

        var apiKey = '2qk7xs42np9szxmnbe4ef2x4';

        var getLineStations = function(line){
            return $http.get({url: 'http://api.wmata.com/Rail.svc/json/jStations?LineCode=' + line + '&api_key=' + apiKey})
                .then(function(response){
                    return response.data;
            });
        };

        return {
            getLineStations: getLineStations
        };

    };

    var module = angular.module("metroD3");
    module.factory("metro", metro);

}());