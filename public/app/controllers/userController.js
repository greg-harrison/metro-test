(function(){

    var app = angular.module("metroD3");

    var UserController = function($scope, $interval, $location, github, $routeParams) {

        // Added COUNTDOWN LOGIC

        $scope.search = function (username){
            $location.path("/githubUser/" + username);
        };

        var onUserComplete = function (data){
            $scope.user = data;
            //Added an http get request that will fire and use part of the inital request to find the url for this data.
            github.getRepos($scope.user).then(onRepos, onError);
        };

        //Added onRepos method to parse the response for the data value and append it to the $scope as 'repos'
        var onRepos = function (data){
            $scope.repos = data;
        };

        var onError = function (reason){
            $scope.error = "Could not fetch data" + reason;
        };

        $scope.username = 'angular';
        $scope.userActiveTab = "active";
        $scope.title = "Github User Search";
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = '-stargazers_count';
        github.getUser($scope.username).then(onUserComplete, onError);

    };

    app.controller("UserController", UserController);

}());