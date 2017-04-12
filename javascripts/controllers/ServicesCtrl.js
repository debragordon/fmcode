"use strict";

app.controller("ServicesCtrl", function ($scope, $routeParams, $rootScope, $http){

  console.log("services is connected");

  $http.get("http://nashville-songdemo.com/data/siteContent.json").then(response =>{
    $scope.siteData = response.data;
    $scope.testimonials = $scope.siteData.testimonials;
  });

});