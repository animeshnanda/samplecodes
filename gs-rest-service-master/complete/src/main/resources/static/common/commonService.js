'use strict';
define([
	'angular'
], function(angular) {
	angular.module('commonService', [])
	.service('chartService', function($http,$q) {
		this.getChartSeriesData = function() {
			var strData;
			//var promise=$http.get("http://localhost:5000/data/custom-chart-data.json")
			var promise=$http.get("http://localhost:8080/greetings/abc")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.service('sparklineService', function($http,$q) {
		this.getChartSeriesData = function() {
			var strData;
			var promise=$http.get("http://localhost:8080/data/custom-chart-sparkline.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.factory('myFactory', function($http,$q){
	  return {
			sayHello: function() {
			var strData;
			$http.get("http://localhost:8080/data/custom-chart-data.json")
			.success(function (data) {
				strData = data;
				console.log(strData);
			});

			return strData;
			}
		};
	});
});