'use strict';
define([
	'angular'
], function(angular) {
		angular.module('commonDirective', [])
		.directive('chartElement', function() {
			var directive = {};
			directive.restrict = 'AE';
			directive.link = function($scope, element, attributes) {
				element.html("<div id='container' style='min-width: 310px; height: 400px; margin: 0 auto'></div>");
			}
			return directive;
		})
		.directive('sparklineElement', function() {
			var directive = {};
			directive.restrict = 'AE';
			directive.link = function($scope, element, attributes) {
				element.html("<div id='sparkcontainer' style='height: 40px; width: 200px;'></div>");

			}
			return directive;
		});
});