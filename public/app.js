var app = angular.module('superheroApp', ['addSuperheroCtrl', 'galleryCtrl','detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){

        $routeProvider.when('/addSuperhero', {
            templateUrl: 'partials/addSuperhero.html',
            controller: 'addSuperheroController'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })

        .otherwise({redirectTo:'/addSuperhero'});

        filepickerProvider.setKey('process.env.FILESTACK_KEY');
});
