(function(){
	
	var module = angular.module("alarm");
	
	module.controller("alarmController", ["alarmService", function(alarmService) {
		var vm = this;
		vm.name = "alarm";
		vm.stopAlarm = function() {
			alarmService.currentAlarm.pause();
			alarmService.currentAlarm.currentTime = 0;
		}
	}]);
	
})();