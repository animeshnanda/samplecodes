
define([
	'angular',
	'commonService',
	'angularRoute',
	'../modules/mhome/homeCtrl'
], function(angular, angularRoute, chart, commonService) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.home',
		'commonService'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.              
				when('/', {
                    templateUrl: '/modules/mhome/home.html',
                    controller: 'homeCtrl'
                }).						
                otherwise({
                    redirectTo: '/',
					templateUrl: '/modules/mhome/home.html',
                    controller: 'homeCtrl'
                });
	}])
    .controller('mainPageCtrl', ['$scope', '$http', 'rootVariables', '$routeParams', function($scope, $http, rootVariables, $routeParams) {
            //$scope.app = {};
			console.log("abcd");
    }]);
});