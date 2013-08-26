'use strict';

/* Services */
var serviceModule = angular.module('myApp.services', []);

serviceModule.factory('messages',['$http', 'Message', function(http,Message) {
	function MessagesService(http, Message) {
		
		this.storeMessage = function(newMessage,callback) {
			// var aMessage = new Message({"description":newMessage});
			// aMessage.$save();
			// callback({"response":"Message is stored","status":"OK"});

			var aMessage = {"description":newMessage};
	    	http.post('/api/message', aMessage).
	    		success(function(data) {
	    			callback({"response":"Message is stored","status":"OK"})
	    		});
		};

		this.loadMessages = function(callback) {
			// callback(Message.query());
			http.get('/api/message').
				success(function(data) {
					callback(data);
				});
		}
	}

	return new MessagesService(http, Message);
}]);

serviceModule.factory('Message',['$resource', function(resource) {
	return resource('/api/message/:messageId');
}]);