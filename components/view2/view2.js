(function(){
	
	var module = angular.module("view2", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "view2",
			url: "/view2",
			template: "<view2></view2>",
		});
	}]);
	
	module.directive("autoScroll", function($interval){
		return {
			link: function(scope, elem) {
				var count = scope.vm.widgets.length;
				$interval(function(){
					if(count != scope.vm.widgets.length) {
						$(elem[0]).animate({'scrollTop': count * elem.height()});
						count++;
					}
					else {
						$(elem[0]).animate({'scrollTop': 0});
						count = 0;
					}
				},2000);
			}
		};
	});
})();