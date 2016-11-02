(function(){
	
	var module = angular.module("view1");
	
	module.controller("view1Controller", ["view1Service", function(view1Service) {
		var vm = this;
		vm.name = "view1";
		vm.devices = [{
			image: "common/images/lights.jpg",
			title: "sample1",
			content: "<p>Desc</p>"
		},{
			image: "../image123.jpg",
			title: "sample2",
			content: "<p>Desc</p>"
		},{
			image: "../image123.jpg",
			title: "sample3",
			content: "<p>Desc</p>"
		},{
			image: "../image123.jpg",
			title: "sample4",
			content: "<p>Desc</p>"
		}]
	}]);
	
})();