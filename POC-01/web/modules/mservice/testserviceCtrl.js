'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.testservice', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/servicecall', {
					templateUrl: '/modules/mservice/testservice.html',
					controller: 'testServiceCtrl'
			});
	}])

	.controller('testserviceCtrl', ['$scope','$http','$rootScope','$document','callService',function($scope,$http,$rootScope,$document,callService) {
		$scope.hello = "hello Service"; var storedData;
		var dataSrv = callService.getServiceData().then(function(response){
			storedData = response.data;
			console.log(storedData);
			$scope.names = response.data.records;
		});
	}])
	
	.service('callService',['$http',function($http){
		this.getServiceData = function(){
			var temp =  $http.get("http://www.w3schools.com/angular/customers.php")
			.success(function(response) {return response.records;});
			return temp;
		}
	}])
});

