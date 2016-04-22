var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
    $scope.superheroes = [];

    $http.get('/superhero')
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.superheroes = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});
