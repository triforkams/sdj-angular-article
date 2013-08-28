'use strict';

var app = angular.module('myApp', ['myApp.services','ngResource']).
	config(['$locationProvider', '$interpolateProvider', function($locationProvider, $interpolateProvider) {
	    $locationProvider.html5Mode(true);
	    $interpolateProvider.startSymbol('[[');
	    $interpolateProvider.endSymbol(']]');
	}]);

app.controller('MessagesController', function MessagesController($scope, messages) {
	$scope.messages = [];
	$scope.newMessage = "";

    $scope.createNewMessage = function() {
    	messages.storeMessage($scope.newMessage,function(response) {
            $scope.newMessage = "";
    		$scope.loadMessages(messages);
    	});
    };

    $scope.loadMessages = function () {
    	messages.loadMessages(function (data) {
	        $scope.messages = data;
	    });
    }
});