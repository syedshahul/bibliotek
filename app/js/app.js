'use strict';


// Declare app level module which depends on filters, and services
var bibliotek = angular.module('bibliotek', ['ui.bootstrap','bibliotek.filters', 'bibliotek.services',
    'bibliotek.directives', 'bibliotek.controllers']).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {templateUrl:'partials/partial1.html', controller:'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl:'partials/partial2.html', controller:'MyCtrl1'});
    $routeProvider.when('/view3', {templateUrl:'partials/accordion.html', controller:'AccordionDemoCtrl'});
    $routeProvider.when('/view4', {templateUrl:'partials/communicate-btwn-controller.html'});
    $routeProvider.otherwise({redirectTo:'/view1'});
}]);
