(function(){
	
	var module = angular.module("alarm");
	
	module.factory("alarmService", ["$interval", "$state", "$http", function($interval, $state, $http) {
		 return {
			 start: function(hh,mm) {
				var vm = this;
				$interval(function(){
					if(moment().diff(moment().set({ 'hour': hh, 'minute': mm, 'second' : 0})) == 0) {
						vm.currentAlarm = new Audio('common/audios/ringtone.mp3');
						vm.currentAlarm.play();
						$state.go("alarm");
						vm.currentAlarm.onpause =function() {
							$state.go("view2");
						}
					}
				}, 1000);
			 }
		 };
	}]);
	 
})();