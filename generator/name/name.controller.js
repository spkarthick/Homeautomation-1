(function(){
	
	var module = angular.module("{{name}}");
	
	module.controller("{{name}}Controller", ["{{name}}Service", function({{name}}Service) {
		var vm = this;
		vm.name = "{{name}}";
	}]);
	
})();