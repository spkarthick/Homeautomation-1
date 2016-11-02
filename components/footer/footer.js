(function(){
	
	var module = angular.module("footer", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "footer",
			url: "/footer",
			template: "<footer></footer>",
		});
	}]);
	
	
})();