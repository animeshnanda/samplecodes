
define([
	'angular',
	'commonService',
	'angularRoute',
	'../modules/mpage1/page1Ctrl',
	'../modules/mpage2/page2Ctrl'
], function(angular, angularRoute, chart, commonService) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.page1',
		'myApp.page2',
		'commonService'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.              
				when('/page2', {
                    templateUrl: '/modules/mpage2/page2.html',
                    controller: 'page2Ctrl'
                }).						
                otherwise({
                    redirectTo: '/',
					templateUrl: '/modules/mpage1/page1.html',
                    controller: 'page1Ctrl'
                });
	}])
    .controller('mainPageCtrl', ['$scope', '$http', 'rootVariables', '$routeParams', function($scope, $http, rootVariables, $routeParams) {
            //$scope.app = {};
			console.log("abcd");
    }]);
});