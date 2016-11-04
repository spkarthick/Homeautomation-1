(function(){
	var module = angular.module("tv");
	
	module.component("tv", {
		templateUrl: "components/tv/tv.html",
		controller: "tvController",
		controllerAs: "vm"
	});
})();