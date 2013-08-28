'use strict';

/* Services */
var serviceModule = angular.module('myApp.services', []);

serviceModule.factory('messages',['$http', function(http) {
	function MessagesService(http) {
		
		this.storeMessage = function(newMessage,callback) {
			var aMessage = {"description":newMessage};
	    	http.post('/api/message', aMessage).
	    		success(function(data) {
	    			callback({"response":"Message is stored","status":"OK"})
	    		});
		};

		this.loadMessages = function(callback) {
			http.get('/api/message').
				success(function(data) {
					callback(data);
				});
		}
	}

	return new MessagesService(http);
}]);