(function(){
	
	var module = angular.module("tv");
	
	module.factory("tvService", ["$http", function($http) {
		 return {
			change: function(num) {
				$http.get("http://192.168.1.107:1880/tv/channel/change",{params:{'channel': num}});
			}
		 };
	}]);
	
})();