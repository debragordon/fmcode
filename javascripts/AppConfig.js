"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/landing.html',
            controller: 'LandingCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
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


        // use if I need a contact form/page
        // .when('/contact', {
        //     templateUrl: 'partials/contact.html',
        //     controller: 'ContactCtrl'
        // })