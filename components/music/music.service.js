(function(){

	var module = angular.module("music");
	
	module.factory("musicService", ["$websocket", "$http", function($websocket, $http) {
		 var methods = {
			 currentlyPlaying: null,
			 reset: function() {
				 this.sendCommand('stop');
				 //this.currentlyPlaying.active = false;
			 },
			 initSocket: function() {
				var dataStream = $websocket('ws://192.168.1.107:1880/ws/playlist');
				dataStream.onMessage(function(message) {
					var data = JSON.parse(message.data);
					methods.playlist = data.playlist;
					methods.status = data.status;
				});
			 }, 
			 sendCommand: function(cmd, param) {
				 $http.get('http://192.168.1.107:1880/music/' + cmd , {params:param});
			 },
			 playlist: []
			 
		 }; 
		 methods.reset();
		 methods.initSocket();
		 return methods;
	}]);

})();