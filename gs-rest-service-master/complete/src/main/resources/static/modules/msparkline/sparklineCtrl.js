'use strict';
define([
	'angular',
	'angularRoute',
	'highCharts',
	'nghighCharts',
	'exporting',
	'commonService',
	'commonDirective',
	'jquery',
	'jqSparkline'
], function(angular) {
	angular.module('myApp.sparkline', ['ngRoute','highcharts-ng','commonService','commonDirective'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/sparkline', {
                templateUrl: '/modules/msparkline/sparkline.html',
                controller: 'sparklineCtrl'
            });
	}])
	.controller('sparklineCtrl', ['$scope','sparklineService',function($scope,sparklineService) {

	var storedData;
		$scope.hello = "hello sparkline";

		function setChartData(dataJson){
			var arrMargin = JSON.parse(dataJson.chart.margin);
			var constructSeries = [];
			for(var i=0; i < dataJson.series.length; i++){
				var temp = dataJson.series[i].data;
				var tempArr = JSON.parse(temp);
				var abc = {type: dataJson.series[i].type, data: tempArr, _colorIndex:3,_symbolIndex:1};
				constructSeries.push(abc);
			}
			var seriesData = {
				chart: {renderTo: dataJson.chart.renderTo,margin:arrMargin,backgroundColor:dataJson.chart.backgroundColor},
				title: {text: dataJson.title.text},
				credits: {enabled: dataJson.credits.enabled},
				xAxis: {labels: {enabled: dataJson.xAxis.labels.enabled}},
				yAxis: {maxPadding: parseInt(dataJson.yAxis.maxPadding),minPadding: parseInt(dataJson.yAxis.minPadding),gridLineWidth: parseInt(dataJson.yAxis.gridLineWidth),endOnTick: dataJson.yAxis.endOnTick,labels: {enabled: dataJson.yAxis.labels.enabled}},
				legend: {enabled: dataJson.legend.enabled},
				tooltip: {enabled: dataJson.tooltip.enabled},
				plotOptions:{series:{enableMouseTracking:dataJson.plotOptions.series.enableMouseTracking, lineWidth:parseInt(dataJson.plotOptions.series.lineWidth), shadow:dataJson.plotOptions.series.shadow, states:{hover:{lineWidth:parseInt(dataJson.plotOptions.series.states.hover.lineWidth)}}, marker:{radius:parseInt(dataJson.plotOptions.series.marker.radius),states:{hover:{radius:parseInt(dataJson.plotOptions.series.marker.states.hover.radius)}}}}},
				series: constructSeries
			};
			$scope.series = seriesData;
			$(function () {
				Highcharts.setOptions({global : {useUTC : false}});
				var chart = new Highcharts.Chart(seriesData);
				
				$('.sparklines').sparkline('html',  {
					type: 'line',
					width: '200px ',
					height: '50px',
					lineColor: '#ffaa56',
					fillColor: '#F9DBA8',
					spotColor: undefined,
					minSpotColor: undefined,
					maxSpotColor: undefined,
					highlightSpotColor: undefined,
					highlightLineColor: undefined,
					spotRadius: 0,
					drawNormalOnTop: true,
					disableTooltips:true,
					disableHighlight:true
				});
				$('.sparklines2').sparkline('html', {
					type: 'line',
					width: '200px ',
					height: '50px',
					lineColor: '#f7a39c',
					fillColor: '#F5B3AB',
					spotColor: undefined,
					minSpotColor: undefined,
					maxSpotColor: undefined,
					highlightSpotColor: undefined,
					highlightLineColor: undefined,
					spotRadius: 0,
					drawNormalOnTop: true,
					disableTooltips:true,
					disableHighlight:true
				});
				
			});
		};
		var seriesDatasrv = sparklineService.getChartSeriesData().then(function(data){
			storedData = data.data;
			setChartData(data.data);
		});
    }]);
});

