'use strict';

var app = angular.module('myApp', ['myApp.services']).
	config(['$locationProvider', '$interpolateProvider', function($locationProvider, $interpolateProvider) {
	    $locationProvider.html5Mode(true);
	    $interpolateProvider.startSymbol('[[');
	    $interpolateProvider.endSymbol(']]');
	}]);

app.controller('MessagesController', function MessagesController($scope, $http) {
	$scope.messages = [];
	$scope.newMessage = "";

    $scope.createNewMessage = function() {
    	var aMessage = {};
    	aMessage.description = $scope.newMessage;
    	$http.post('/api/message', aMessage).
    		success(function(data) {
    			$scope.newMessage = "";
    			$scope.loadMessages();
    		});
    };

    $scope.loadMessages = function () {
		$http.get('/api/message').
			success(function(data) {
				$scope.messages = data;
			});
    }
});