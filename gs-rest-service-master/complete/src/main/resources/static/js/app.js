
define([
	'angular',
	'commonService',
	'angularRoute',
	'../modules/mlogin/loginCtrl',
	'../modules/mhome/homeCtrl',
	'../modules/mchart/chartCtrl',
	'../modules/msparkline/sparklineCtrl',
	'../modules/mservice/testserviceCtrl'
], function(angular, angularRoute, chart, commonService) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.login',
		'myApp.home',
		'myApp.chart',
		'myApp.sparkline',
		'myApp.testservice',
		'commonService'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.              
				when('/charts', {
                    templateUrl: '/modules/mchart/chart.html',
                    controller: 'chartCtrl'
                }).			
				when('/sparkline', {
                    templateUrl: '/modules/msparkline/sparkline.html',
                    controller: 'sparklineCtrl'
                }).	
				when('/home', {
                    templateUrl: '/modules/mhome/home.html',
                    controller: 'homeCtrl'
                }).			
				when('/servicecall', {
                    templateUrl: '/modules/mservice/testservice.html',
                    controller: 'testserviceCtrl'
                }).						
                otherwise({
                    redirectTo: '/',
					templateUrl: '/modules/mlogin/login.html',
					controller: 'loginCtrl'
                });
	}])
    .controller('mainPageCtrl', ['$scope', '$http', 'rootVariables', '$routeParams', function($scope, $http, rootVariables, $routeParams) {
            //$scope.app = {};
			console.log("abcd");
    }]);
});