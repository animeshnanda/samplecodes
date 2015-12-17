'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.page2', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/servicecall', {
					templateUrl: '/modules/mpage2/page2.html',
					controller: 'page2Ctrl'
			});
	}])

	.controller('page2Ctrl', ['$scope','$http','$rootScope','$document',function($scope,$http,$rootScope,$document) {

		$scope.employees=[{name:'John', age:25, gender:'boy'},
		   {name:'Jessie', age:30, gender:'girl'},
		   {name:'Johanna', age:28, gender:'girl'},
		   {name:'Joy', age:15, gender:'girl'},
		   {name:'Mary', age:28, gender:'girl'},
		   {name:'Peter', age:95, gender:'boy'},
		   {name:'Sebastian', age:50, gender:'boy'},
		   {name:'Erika', age:27, gender:'girl'},
		   {name:'Patrick', age:40, gender:'boy'},
		   {name:'Samantha', age:60, gender:'girl'}];
		$scope.selection=[];
		$scope.toggleSelection = function toggleSelection(employeeName) {
			var idx = $scope.selection.indexOf(employeeName);
			if (idx > -1) {
				$scope.selection.splice(idx, 1);
			}
			else {
				$scope.selection.push(employeeName);
			}
		};
	}])
});
