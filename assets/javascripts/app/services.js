app.service('PALACE', ['$http', function($http) {
	base_url = ".palace.io/";

    this.get = function(palace_data){

    	// prepare url
    	base_url = ".palace.io/";
    	data_url = "http://" + palace_data["subdomain"] + base_url + palace_data["api"]

   		return $http({
   			method: "GET",
   			url: data_url,
   			params: palace_data["params"],
   			headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
   		});
    }
}]);