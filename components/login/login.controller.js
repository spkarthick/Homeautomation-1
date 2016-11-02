(function(){
	
	var module = angular.module("login");
	
	module.controller("loginController", ["loginService", function(loginService) {
		var vm = this;
		vm.credentials = {
			username: null,
			password: null
		};
		vm.name = "login";
		vm.login = function() {
			loginService.isValidUser();
		}
	}]);
	
})();