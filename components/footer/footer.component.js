(function(){
	var module = angular.module("footer");
	
	module.component("footer", {
		templateUrl: "/components/footer/footer.html",
		controller: "footerController",
		controllerAs: "vm"
	});
})();