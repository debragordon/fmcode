"use strict";

app.controller("SamplesCtrl", function ($scope, $interval, $routeParams, $rootScope, $http){

  console.log("samples is connected");

  // $http.get("/data/siteContent.json").then(response =>{
  //   $scope.siteData = response.data;
  //   $scope.testimonials = $scope.siteData.testimonials;
  // });

  // var count = 0;
  // $interval(function(){
  //   $scope.testimonialSingle = $scope.testimonials[count].testimonialSingle;
  //   count = count + 1;
  //   if ($scope.testimonials.length == count){
  //     count = 0;
  //   }
  // }, 2000);
});