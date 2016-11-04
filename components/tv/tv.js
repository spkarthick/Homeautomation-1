(function(){
	
	var module = angular.module("tv", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "tv",
			url: "/tv",
			template: "<tv></tv>",
		});
	}]);
	
	
})();