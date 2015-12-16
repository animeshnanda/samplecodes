'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.home', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/home', {
                templateUrl: '/modules/mhome/home.html',
                controller: 'homeCtrl'
            });
	}])
	.controller('homeCtrl', ['$scope',function($scope) {
	
		$('.select-all-multiple').click(function() {
			$('.filter-multiple option').prop('selected', true);
			return false;
		});
	
		$scope.hello = "hello World";
		
		$scope.applyFilter = function (){
			var data=$scope.filter;  
		console.log(data);
			$scope.filterdata = data;
		}
		
    }]);
});

