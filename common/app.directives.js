(function() {
	
	var myApp = angular.module("myApp").run(['$rootScope', '$websocket', 'view2Service', 'alarmService', function($rootScope, $websocket, view2Service, alarmService){
		$rootScope.goBack = function() {
			history.back();
		}
		view2Service.deviceStream = $websocket('ws://192.168.1.107:1880/ws/devices');
		view2Service.deviceStream.onMessage(function(message) {
			view2Service.devices = JSON.parse(message.data);
		});
		alarmService.start(7,0);
	}]);
	
	myApp.directive("version", function() {
		return {
			template: "0.0.1"
		};
	})
	.directive("device", function() {
		return {
			scope: {
				'image': '<image',
				'title': '<title',
				'content': '<content'
			}, 
			template: "<div class='device-wrapper'><img src='{{image}}'/><h4 class='title' ng-bind='title'></h4><div ng-bind-html='content'></div></div>",
			link: function(scope, elem) {
				new Hammer(elem[0]).on('swipeleft', function() {
					$(elem.parent().parent()[0]).animate({scrollLeft: elem.parent().parent()[0].scrollLeft + elem.innerWidth()},200);
				});
				new Hammer(elem[0]).on('swiperight', function() {
					$(elem.parent().parent()[0]).animate({scrollLeft: elem.parent().parent()[0].scrollLeft - elem.innerWidth()},200);
				});
			}
		};
	});
	
})();