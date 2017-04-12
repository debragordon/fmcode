"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/landing.html'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('/samples', {
            templateUrl: 'partials/samples.html'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html'
        })
        .when('/services', {
            templateUrl: 'partials/services.html'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html'
        })
        .otherwise('/home');
});


        // use if I need a contact form/page
