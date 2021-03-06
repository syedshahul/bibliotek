'use strict';


// Declare app level module which depends on filters, and services
/* ng-app="module-name" should be equal to angular.module('module-name',[]); "*/
var bibliotek = angular.module('bibliotek',
															 ['ui.bootstrap',
																						 'bibliotek.filters',
																						 'bibliotek.services',
																						 'bibliotek.directives',
																						 'bibliotek.controllers'
															 ]);

bibliotek.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {templateUrl:'partials/partial1.html', controller:'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl:'partials/partial2.html', controller:'MyCtrl1'});
    $routeProvider.when('/view3', {templateUrl:'partials/accordion.html', controller:'AccordionDemoCtrl'});
    $routeProvider.when('/view4', {templateUrl:'partials/communicate-btwn-controller.html'});
    $routeProvider.when('/the-dot', {templateUrl:'partials/the-dot.html'});
    $routeProvider.when('/the-scope-on-method', {templateUrl:'partials/method-on-scope.html'});
    $routeProvider.when('/ng-repeat', {templateUrl:'partials/ng-repeat.html'});
    $routeProvider.when('/show-hide', {templateUrl:'partials/hiding-showing.html'});
    $routeProvider.when('/forms', {templateUrl:'partials/forms.html'});
    $routeProvider.when('/directives', {templateUrl:'partials/directive.html'});
    $routeProvider.when('/filters', {templateUrl:'partials/filters.html'});
    $routeProvider.when('/directivesCtrl', {templateUrl:'partials/directives-controllers.html'});
    $routeProvider.when('/transclusion', {templateUrl:'partials/transclusion.html'});
    $routeProvider.when('/components-containers', {templateUrl:'partials/components-containers.html'});
    $routeProvider.when('/directive-communication', {templateUrl:'partials/directive-communication.html'});
	  $routeProvider.when('/directive-drag', {templateUrl:'partials/drag-element-directive.html'});
	  $routeProvider.when('/index-event', {templateUrl:'partials/index-event-logs.html'});
	  $routeProvider.when('/manip-dom', {templateUrl:'partials/manipulating-dom.html'});
	$routeProvider.when('/promise', {templateUrl:'partials/promises.html'});
	$routeProvider.when('/route-handling', {templateUrl:'partials/route-handling.html'});
	$routeProvider.when('/user/:name/:email/:mobile', {
		templateUrl:'partials/route-params.html',
		controller:'RouteParamCtrl'});
	$routeProvider.when('/zippy', {templateUrl:'partials/zippy.html'});


	$routeProvider.when('/route', {
		templateUrl:'partials/route-handling.html',
		controller:'ViewCtrl',
		resolve: {
			loadData: viewCtrl.loadData
		}});
    $routeProvider.otherwise({redirectTo:'/view1'});
}]);

bibliotek.run(function($rootScope, $log){
	$rootScope.$log = $log;
});

bibliotek.config(function($logProvider){
	$logProvider.debugEnabled(true);
});
