"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/landing.html',
            activetab: 'home',
            controller: 'LandingCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'GalleryCtrl'
        })
        .when('/samples', {
            templateUrl: 'partials/samples.html',
            controller: 'SamplesCtrl'
        })
        .when('/services', {
            templateUrl: 'partials/services.html',
            controller: 'ServicesCtrl'
        })
        .otherwise('/home');
});
