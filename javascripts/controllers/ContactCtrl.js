"use strict";

app.controller("ContactCtrl", function ($scope, $routeParams, $rootScope, $http){

  console.log("contact is connected");

  $http.get("http://www.debragordon.tech/FMND/data/siteContent.json").then(response =>{
    $scope.siteData = response.data;
    $scope.testimonials = $scope.siteData.testimonials;
  });

});