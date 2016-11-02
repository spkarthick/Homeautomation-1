(function(){
	var module = angular.module("view1");
	
	module.component("view1", {
		templateUrl: "/components/view1/view1.html",
		controller: "view1Controller",
		controllerAs: "vm"
	});
})();