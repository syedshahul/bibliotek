'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var bibliotek = angular.module('bibliotek.services', []).
    value('version', '0.1');
bibliotek.factory('MOService', function ($rootScope) {
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

bibliotek.factory("Students", function ($rootScope) {
    var students = [
        {name:'Power Star', id:'1', gender:'Male'},
        {name:'Jack Spraw', id:'2' , gender:'Male'},
        {name:'Emy Jackson', id:'3' , gender:'Female'}
    ];

    return students;
});


