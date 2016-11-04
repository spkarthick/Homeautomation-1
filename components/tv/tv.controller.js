(function(){
	
	var module = angular.module("tv");
	
	module.controller("tvController", ["tvService", function(tvService) {
		var vm = this;
		vm.name = "tv";
		vm.changeChannel = function(num) {
			tvService.change(num);
		}
		vm.channels = [{
			name:"Sun TV",
			number:"1503",
			image: ""
		},{
			name:"K TV",
			number:"1507",
			image: ""
		},{
			name:"Sun Music",
			number:"1511",
			image: ""
		},{
			name:"Vijay",
			number:"1517",
			image: ""
		},{
			name:"Comedy Central",
			number:"229",
			image: ""
		},{
			name:"Sun News",
			number:"1510",
			image: ""
		}];
	}]);
	
})();