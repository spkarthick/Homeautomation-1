(function(){
	
	var module = angular.module("{{name}}", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "{{name}}",
			url: "/{{name}}",
			template: "<{{name}}></{{name}}>",
		});
	}]);
	
	
})();