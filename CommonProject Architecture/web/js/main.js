require.config({
	paths: {
		'jquery' : '../components/lib/jquery/jquery',		
		'angular' : '../components/lib/angular/angular',
		'angularRoute': '../components/lib/angular-route/angular-route',
		'commonService':'/common/commonService',
		'commonDirective':'/common/commonDirective',
		'angularCookies': '../components/lib/angular-cookies/angular-cookies',
		'bootstrap': '../components/lib/bootstrap/bootstrap.min'
	},
	shim: {
		angularRoute: {
			deps: ['angular'],
			exports: 'angular'
		},
		angular: {
			exports : 'angular'
		},
		angularCookies: {
			deps: ['angular']
		},
		bootstrap: {
			deps: ['jquery']
		}
	},
	//baseUrl: '/js',
	waitSeconds: 1
});


require([
	'angular',
	'app'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['myApp']);
		});
	}
);