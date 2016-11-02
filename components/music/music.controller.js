(function(){
	
	var module = angular.module("music");
	
	module.controller("musicController", ["$scope", "$filter", "musicService", "view2Service", function($scope, $filter, musicService, view2Service) {
		var vm = this;
		vm.name = "music";
		$scope.music = musicService;
		$filter('filter')(view2Service.devices, {'name': 'speaker'})[0].status = true;
		musicService.sendCommand('play');
		vm.onMusicSelect = function(music) {
			//$filter('filter')(view2Service.devices, {'name': 'speaker'})[0].status = true;
			musicService.sendCommand('goto',{'index': music.index});
			if(musicService.currentlyPlaying)
				musicService.currentlyPlaying.active = false;
			musicService.currentlyPlaying = music;
			music.active = true;
		}
	}]);
	
})(); 