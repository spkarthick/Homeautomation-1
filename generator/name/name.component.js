(function(){
	var module = angular.module("{{name}}");
	
	module.component("{{name}}", {
		templateUrl: "/components/{{name}}/{{name}}.html",
		controller: "{{name}}Controller",
		controllerAs: "vm"
	});
})();