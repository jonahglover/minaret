DashboardApp.service('accountSettingsServices', ['$http', function($http) {
    this.details = function(){
   		return $http({
   			url:'account/details',
   			method: "POST",
   			headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
   		});
    },
    this.update = function(userData){
   		return $http({
   			url:'account/update',
   			method: "POST",
   			data: userData,
   			headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
   		});
    }
}]);