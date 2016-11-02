(function(){
	var module = angular.module("alarm");
	
	module.component("alarm", {
		templateUrl: "components/alarm/alarm.html",
		controller: "alarmController",
		controllerAs: "vm"
	});
})();