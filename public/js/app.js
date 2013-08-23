'use strict';

var app = angular.module('myApp', ['myApp.services']).
	config(['$locationProvider', '$interpolateProvider', function($locationProvider, $interpolateProvider) {
	    $locationProvider.html5Mode(true);
	    $interpolateProvider.startSymbol('[[');
	    $interpolateProvider.endSymbol(']]');
	}]);

app.controller('IndexController', function IndexController($scope) {
    $scope.label = "This bindings is brought you you by [[]] interpolation symbols.";
});

app.controller('MessagesController', function MessagesController($scope, $http) {
    $http.get('/messages').success(function (data) {
        $scope.messages = data.messages;
    });
});