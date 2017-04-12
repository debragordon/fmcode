"use strict";

app.controller("GalleryCtrl", function ($scope, $routeParams, $rootScope, $http){

  console.log("Gallery is connected");

  $http.get("http://nashville-songdemo.com/data/siteContent.json").then(response =>{
    $scope.siteData = response.data;
    $scope.images = $scope.siteData.sliderImages;
  });

});