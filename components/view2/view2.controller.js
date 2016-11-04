(function(){
	
	var module = angular.module("view2");
	
	module.controller("view2Controller", ["$scope", "$interval", "$http", "$compile", "$filter", "$state", "$websocket", "view2Service","musicService", function($scope, $interval, $http, $compile, $filter, $state, $websocket, view2Service, musicService) {
		var vm = this;
		this.devices = view2Service.devices;
		vm.name = "view2";
		vm.fitness = {};
		vm.deviceSelect = function(device) {
			if(device.status) {
				eval(device.onPowerOff);
				device.status = !device.status;
			}
			else if(device.view)
				$state.go(device.view);
			else
				device.status = !device.status
			view2Service.deviceStream.send(JSON.stringify(view2Service.devices));
		} 
		vm.updateWidgets = function() {
			view2Service.getWeatherUpdate().success(function(data) {
				var weatherWidget = $filter('filter')(vm.widgets, {'name': 'weather'})[0];
				weatherWidget.title = "<span>" + parseInt(data.main.temp) + "<sup>o</sup>C</span><div class='text-tiny'>" + moment().format("DD MMM, ddd") + "</div>";
				weatherWidget.text = data.weather[0].description;
				weatherWidget.icon = 'icon-' + data.weather[0].main.toLowerCase();
				weatherWidget.loading = false; 
			});
			 
			
			view2Service.getCalenderUpdate(function(resp) {  
				var events = resp.items; 
				var eventsWidget = $filter('filter')(vm.widgets, {'name': 'events'})[0];
				eventsWidget.title = "<ul class='text-tiny text-normal list-style-none'>";
				for(var i = 0; i < resp.items.length; i++) {
					var datetime = moment(resp.items[i].start.dateTime);
					if (!resp.items[i].start.dateTime) {
						datetime = moment(new Date(resp.items[i].start.date));
					}
					if(datetime.diff(moment(), 'days') == 0)
						eventsWidget.title += "<li><strong>" + datetime.format('HH:mm') + "</strong><div>" + resp.items[i].summary + "</div></li>";
				}
				eventsWidget.title += "</ul>";
				eventsWidget.loading = false;
				$scope.$digest();
			});
			
			view2Service.getFitnessUpdate(function(response) {
				var steps = 0;
				for(var i=0;i<response.result.point.length;i++) {
					if(response.result.point[i].value[0].intVal > 50) {
						steps += response.result.point[i].value[0].intVal;
						//document.getElementById('sample').innerHTML += moment(response.result.point[i].startTimeNanos/1000000).format("DD-MMM-YYYY hh:mm") + "  " + response.result.point[i].value[0].intVal + "<br/>";
					}
				}
				vm.fitness.steps = steps;
				vm.fitness.distance = Math.floor(steps / 1250);
				vm.fitness.stepsPercent = (steps / 10000) * 100;
				vm.fitness.distancePercent = ((steps / 1250) / 8) * 100;
				$(".fitness .steps, .fitness .distance").width(vm.fitness.stepsPercent + "%");
				$compile(angular.element(".fitness"))($scope)
			});
		}
		vm.updateWidgets();
		$interval(vm.updateWidgets, 120000)
		vm.widgets = [{
			name: "weather",
			widgetTitle: "Weather Outside",
			title: "",
			icon: "icon-rain",
			iconSize: "large",
			text: "Rainy with thunder storm",
			textSize: "large",
			loading: true,
			mergedContent: false
		},{
			name: "events",
			widgetTitle: "Today's Events",
			title: "Goto Movie with friends",
			icon: "glyphicon glyphicon-calendar",
			iconSize: "small",
			text: "Captain America: Civilwar",
			textSize: "small",
			loading: true,
			mergedContent: true
		},{
			name: "",
			widgetTitle: "Inside Temperature",
			title: "22<sup>o</sup>C",
			icon: "icon-air-conditioner",
			iconSize: "large",
			text: "Cool<br/>18<sup>o</sup>C<br/>High",
			textSize: "large",
			loading: false,
			mergedContent: false
		},{
			name: "alarms",
			widgetTitle: "Alarms",
			title: "<ul class='text-tiny text-normal list-style-none'><li><strong>Good Morning</strong><div>7:00 AM</div></li></ul>",
			icon: "fa fa-clock-o",
			iconSize: "small",
			text: "",
			textSize: "small",
			loading: false,
			mergedContent: true
		},{
			name: "health",
			widgetTitle: "Fitness",
			title: "<ul class='text-tiny text-normal list-style-none fitness'><li><strong>Steps <br/> {{vm.fitness.steps || 0}} / 10000 steps</strong><div><div class='progress'><div class='progress-bar steps'></div></div></div></li><li><strong>Distance <br/> {{vm.fitness.distance || 0}} / 8 KM</strong><div><div class='progress'><div class='progress-bar distance'></div></div></div></li><li><strong>Water <br/> {{vm.fitness.water || 0}} / 3 L</strong><div><div class='progress'><div class='progress-bar water'></div></div></div></li></ul>",
			icon: "fa fa-heartbeat",
			iconSize: "small",
			text: "",
			textSize: "small",
			loading: false,
			mergedContent: true
		}];
	}]);
	
})();