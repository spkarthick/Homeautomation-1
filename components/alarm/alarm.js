(function(){
	
	var module = angular.module("alarm", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "alarm",
			url: "/alarm",
			template: "<alarm></alarm>",
		});
	}]);
	
	
})();