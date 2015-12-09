'use strict';
define([
	'angular'
], function(angular) {
		angular.module('commonDirective', [])

		.directive('sampledirective', function() {
			var directive = {};
			directive.restrict = 'AE';
			directive.link = function($scope, element, attributes) {
				element.html("<div id='sparkcontainer' style='height: 40px; width: 200px;'></div>");

			}
			return directive;
		});
});