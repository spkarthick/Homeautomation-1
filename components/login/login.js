(function(){
	
	var module = angular.module("login", ["ui.router"]);
	
	module.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state({
			name: "login",
			url: "/login",
			template: "<login class='container'></login>",
		});
		
		$urlRouterProvider.otherwise('/login');
	}]);
	
	module.run(["$rootScope", "loginService", function($rootScope, loginService) {
		$rootScope.$on("$stateChangeStart", function(evt,state){
			if(state.name != "login") {
				loginService.isValidUser().then(function(res) {
					//Login check here	
				});
			}
		});
	}]);
	
	
})();