'use strict';

/* Services */
var serviceModule = angular.module('myApp.services', []);

serviceModule.factory('messages',['Message', function(Message) {
	function MessagesService(Message) {
		
		this.storeMessage = function(newMessage,callback) {
			var aMessage = new Message({"description":newMessage});
			aMessage.$save();
			callback({"response":"Message is stored","status":"OK"});
		};

		this.loadMessages = function(callback) {
			callback(Message.query());
		}
	}

	return new MessagesService(Message);
}]);

serviceModule.factory('Message',['$resource', function(resource) {
	return resource('/api/message/:messageId');
}]);