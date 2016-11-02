(function(){
	var module = angular.module("music");
	
	module.component("music", {
		templateUrl: "components/music/music.html",
		controller: "musicController",
		controllerAs: "vm"
	});
})();