'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'angularCookies',
	'bootstrap',
	'hmacsha256'
], function(angular) {
	angular.module('myApp.login', ['ngRoute','ngCookies'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/', {
                templateUrl: '/modules/mlogin/login.html',
                controller: 'loginCtrl'
            });
	}])
	.run(["$rootScope","$document",function($rootScope,$document) {
			var d = new Date();
			var n = d.getTime();
			console.log(n);
			$rootScope.idleEndTime = n+(50*60*1000); 
			$document.find('body').on('mousemove keydown DOMMouseScroll mousewheel mousedown touchstart', checkAndResetIdle); 
			function checkAndResetIdle(){
				var d = new Date();
				var n = d.getTime();
				if (n>$rootScope.idleEndTime){
					$document.find('body').off('mousemove keydown DOMMouseScroll mousewheel mousedown touchstart');
					document.location.href = '/#/';
					alert('Session ended due to inactivity');
				} else {
					$rootScope.idleEndTime = n+(50*60*1000);
				}
			} 
	}]) 
	.controller('loginCtrl', ['$scope','$cookies','$rootScope','$document','$http','loginService',function($scope,$cookies,$rootScope,$document,$http,loginService) {

		$scope.hello = "hello Login";
		var token = $cookies.get("authToken");
		console.log(token);
		$scope.submitData = function() {
			var logindata=$scope.form;  
			var header = btoa(JSON.stringify({  "alg": "HS256",  "typ": "JWT"}));
			var payload = btoa(JSON.stringify(logindata));
			var encodedContent = header + '.' + payload;
			var signature = CryptoJS.HmacSHA256(encodedContent, "abc123");
			var authToken = header+'.'+payload+'.'+signature;
			//console.log("authToken : " + authToken);
			var returnData;
			var dataSrv = loginService.flogin(logindata).then(function(response){
				returnData = response.data.success;
				$scope.token = response.data;
				$cookies.put("username", logindata.uname);
				if((token != null) || (token != undefined)){
					if(returnData == token){
						console.log("success");
					}else{
						alert(returnData);
					}
				}else{
					$cookies.put("authToken", authToken); 
					token = $cookies.get("authToken");
					if(returnData == token){
						console.log("success");
					}else{
						alert(returnData);
					}
				}
			});
		};
		$scope.clearData = function(msg) {
			$scope.form.uname = "";
			$scope.form.pwd = "";
		};
		
    }]).service('loginService',['$http',function($http){
		this.flogin = function(dt){
			var responseData = $http.post("http://localhost:8080/greetings/loginjson",{userName:dt.uname})
			.success(function(data, status, headers, config){
				console.log(data.success);return data.success;});
			return responseData;
		}
	}]);
});

