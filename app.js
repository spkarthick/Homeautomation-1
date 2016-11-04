(function(){
	
	var myApp = angular.module("myApp", [
		"ui.router",
		"ui.bootstrap",
		"ngAnimate",
		"ngSanitize",
		"view1",
		"view2",
		"music",
		"login",
		"footer",
		"alarm",
		"tv",
		"ngWebSocket"
	]);
	
	angular.element(document).ready(function() {
		angular.bootstrap(document.body,["myApp"]);	
	});
	
})();