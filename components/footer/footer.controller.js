(function(){
	
	var module = angular.module("footer");
	
	module.controller("footerController", ["footerService", function(footerService) {
		var vm = this;
		vm.name = "footer";
	}]);
	
})();