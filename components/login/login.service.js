(function(){
	
	var module = angular.module("login");
	
	module.factory("loginService", ["$http","APICONFIG", function($http, APICONFIG) {
		 return {
			 isValidUser: function() {
				 return $http.get(APICONFIG.loginUrl);
			 }
		 };
	}]);
	
})();