"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'http://debragordon.tech/FMND/partials/landing.html'
        })
        .when('/about', {
            templateUrl: 'http://debragordon.tech/FMND/partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('/samples', {
            templateUrl: 'http://debragordon.tech/FMND/partials/samples.html'
        })
        .when('/services', {
            templateUrl: 'http://debragordon.tech/FMND/partials/services.html',
            controller: 'ServicesCtrl'
        })
        .otherwise('/home');
});


        // use if I need a contact form/page
        // .when('/contact', {
        //     templateUrl: 'partials/contact.html',
        //     controller: 'ContactCtrl'
        // })