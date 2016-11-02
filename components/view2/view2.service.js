(function(){
	
	var module = angular.module("view2");
	
	module.factory("view2Service", ["$http","musicService", function($http,musicService) {
		 return {
			 getWeatherUpdate: function() {
				 return $http.get("http://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=d838cf2dedb25e21ef6d492bfdc558f3&units=metric");
			 },
			 getCalenderUpdate: function(callback) {
				 /**
       * Check if current user has authorized this application.
       */
	   var vm = this;
      window.checkAuth = function() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, vm.handleAuthResult);
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      this.handleAuthResult = function(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          //authorizeDiv.style.display = 'none';
          vm.loadCalendarApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          //authorizeDiv.style.display = 'inline';
        }
      }


      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      this.loadCalendarApi = function() {
        gapi.client.load('calendar', 'v3', this.listUpcomingEvents);
      }
		
		
		
		
		this.listUpcomingEvents = function() {
			var request = gapi.client.calendar.events.list({
			  'calendarId': 'primary',
			  'timeMin': (new Date()).toISOString(),
			  'showDeleted': false,
			  'singleEvents': true,
			  'maxResults': 10,
			  'orderBy': 'startTime'
			});

			request.execute(callback);
		}
		var script = document.createElement('script');
		script.onload = function () {
			//do stuff with the script
		};
		script.src = 'https://apis.google.com/js/client.js?onload=checkAuth';

		document.head.appendChild(script);
		
			 },
			 devices: [{
				name: "",
				type: "",
				icon: "icon icon-light-bulb",
				status: true
			},{
				name: "",
				type: "",
				icon: "icon-cooler",
				status: false
			},{
				name: "",
				type: "",
				icon: "icon-air-conditioner",
				status: true
			},{
				name: "speaker",
				type: "",
				icon: "icon-speaker",
				status: false,
				view: "music",
				onPowerOff: "musicService.reset()"
			}]
		 };
		 
		 
	}]);
	
})();