'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var bibliotek = angular.module('bibliotek.services', []).
  value('version', '0.1');
bibliotek.factory("MOService", function ($rootScope) {
    var mt = {};
    mt.message = "";
    mt.receiveMessage = function (msg) {
        this.message = msg;
        this.moMessageItem();
    };

    mt.moMessageItem = function () {
        $rootScope.$broadcast("getMessage");
    };
    return mt;
});
