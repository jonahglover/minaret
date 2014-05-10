app.controller('mainController', ['$scope', 'PALACE', function($scope, PALACE) {

    $scope.init = function(){
        $scope.comments = [];
        loadComments();
    }

    loadComments = function(){

        palace_data = {
                    "type"      :"receive",
                    "subdomain" :"demo",
                    "api"       :"mysore",
                    "where"     :{}
        };

        PALACE
        .receive(palace_data)
        .success(function(data){
             $scope.comments = data;
        })

    }

}]);

