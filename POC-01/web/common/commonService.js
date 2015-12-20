'use strict';
define([
	'angular'
], function(angular) {
	angular.module('commonService', [])
	.service('RolePrivilegeService', function($http,$q) {
		this.getPrivilegeData = function() {
			var strData;
			var promise=$http.get("http://localhost:9099/data/sample.json")
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