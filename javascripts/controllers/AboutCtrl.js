"use strict";

app.controller("AboutCtrl", function ($scope, $routeParams, $rootScope, $http){

  console.log("about is connected");

  $http.get("/data/siteContent.json").then(response =>{
    $scope.siteData = response.data;
    debugger
    $scope.testimonials = $scope.siteData.testimonials;
  });

});