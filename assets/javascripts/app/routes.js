app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: "/assets/templates/home.html"
      }).      
      otherwise({
        redirectTo: ''
      });
  }]);