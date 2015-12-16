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
	
		$(document).ready(function () {
			$(".accordion_head").click(function () { 
				if ($('.accordion_body').is(':visible')) { 
					$(".accordion_body").slideUp(300); 
					$(".plusminus").text('+'); 
				} 
				if ($(this).next(".accordion_body").is(':visible')) { 
					$(this).next(".accordion_body").slideUp(300); 
					$(this).children(".plusminus").text('+'); 
				} else { 
					$(this).next(".accordion_body").slideDown(300); 
					$(this).children(".plusminus").text('-'); 
				} 
			}); 
		}); 
	}])
});

