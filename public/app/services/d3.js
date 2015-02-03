(function(){
    angular
        .module('metroD3', ['d3'])
        .factory('d3Service', d3);

        function d3(){
            var d3;

            return d3;
        }
}());