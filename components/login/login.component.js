(function(){
	var module = angular.module("login");
	
	module.component("login", {
		templateUrl: "/components/login/login.html",
		controller: "loginController",
		controllerAs: "vm"
	});
})();