'use strict';
define([
	'angular',
	'angularRoute',
	'highCharts',
	'nghighCharts',
	'exporting',
	'commonService',
	'commonDirective',
	'jquery'
], function(angular) {
	angular.module('myApp.chart', ['ngRoute','highcharts-ng','commonService','commonDirective'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/charts', {
                templateUrl: '/modules/mchart/chart.html',
                controller: 'chartCtrl'
            });
	}])
	.controller('chartCtrl', ['$scope','chartService','myFactory',function($scope,chartService,myFactory) {
		var limit =12;
		var lowerlimit = 12-limit;
		var storedData;
		$scope.hello = "hello chart";
		
		$scope.filtermonths = [{'monthfilter': '12'},{'monthfilter': '6'},{'monthfilter': '3'},{'monthfilter': '1'}];
		$scope.filter_data = [{'lookupCode': '12', 'description': 'Last 12 Months'},{'lookupCode': '6', 'description': 'Last 6 Months'},{'lookupCode': '3', 'description': 'Last 3 Months'},{'lookupCode': '1', 'description': 'Last 1 Month'}];	

		function setChartData(dataJson){
			var xAxisData = dataJson.xAxis.categories.split(',');
			xAxisData = xAxisData.splice(lowerlimit,12);
			var constructSeries = [];
			for(var i=0; i < dataJson.series.length; i++){
				var temp = dataJson.series[i].data.split(',');
				var color = (i+1)*2;
				var tempArr = [];
				for(var j=0; j<limit; j++){
					var xyz = parseInt(temp[j]);
					tempArr.push(xyz);
				}
				var abc = {name: dataJson.series[i].name, data: tempArr, _colorIndex: color};
				constructSeries.push(abc);
			}
			var seriesData = {
				chart: {type: dataJson.chart.type},
				title: {text: dataJson.title.text},
				subtitle: {text: dataJson.subtitle.text},
				xAxis: {categories: xAxisData,crosshair: dataJson.xAxis.crosshair, title: {text: dataJson.xAxis.title.text}},
				yAxis: {min: dataJson.yAxis.min,title: {text: dataJson.yAxis.title.text},minorTickInterval: dataJson.yAxis.minorTickInterval},
				tooltip: {headerFormat: dataJson.tooltip.headerFormat,pointFormat: dataJson.tooltip.pointFormat,
					footerFormat: dataJson.tooltip.footerFormat,shared: dataJson.tooltip.shared,useHTML: dataJson.tooltip.useHTML},
				plotOptions: {column: {pointPadding: dataJson.plotOptions.column.pointPadding,borderWidth: dataJson.plotOptions.column.borderWidth}},
				series: constructSeries
			};
			//$scope.series = seriesData;
			$(function () {
				$('#container').highcharts(seriesData);
			});
		};
		var seriesDatasrv = chartService.getChartSeriesData().then(function(data){
			storedData = data.data;
			console.log(storedData);
			setChartData(data.data);
		});
		$scope.abc = function(xyz){
			console.log(xyz);
			limit = xyz;
			lowerlimit = 12-limit;
			setChartData(storedData);
		};
    }]);
});

