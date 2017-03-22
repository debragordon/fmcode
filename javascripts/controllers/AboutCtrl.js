"use strict";

app.controller("AboutCtrl", function ($scope, $routeParams, $rootScope, $http){

  console.log("About is connected");

  $http.get("/data/siteContent.json").then(response =>{
    $scope.siteData = response.data;
    $scope.images = $scope.siteData.sliderImages;
  });

});