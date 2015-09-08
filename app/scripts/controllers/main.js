'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
  	var a = {
  			items: [
  			{
  				id: 1,
  				title: "Title 1",
  				body: "Body 1"
  			},
  			{
  				id: 2,
  				title: "Title 2",
  				body: "Body 2"
  			},

  			{
  				id: 3,
  				title: "Title 3",
  				body: "Body 3"
  			},

  			{
  				id: 4,
  				title: "Title 4",
  				body: "Body 4"
  			}
  	]};

  	$scope.items = a;
  	$scope.$apply();
  	// console.log($scope.items);
  	// console.log(a);
  });
