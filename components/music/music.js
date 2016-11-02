(function(){
	
	var module = angular.module("music", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "music",
			url: "/music",
			template: "<music></music>",
		});
	}]);
	
	
})();