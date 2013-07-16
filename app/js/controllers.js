'use strict';

/* Controllers */

var bibliotek = angular.module('bibliotek.controllers', []);

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

bibliotek.controller('ControllerOriginate', ['$scope', 'MOService', function ($scope, MOService) {

    $scope.push = function (msg) {
        MOService.receiveMessage(msg);
    };

    $scope.$on("getMessage", function () {
        $scope.message = '';
        $scope.msgText = 'Orgi : ' + MOService.message;
    });

}]);
bibliotek.controller('ControllerReceiver1', ['$scope', 'MOService', function ($scope, MOService) {
    $scope.$on("getMessage", function () {
        $scope.message = 'R1 : ' + MOService.message;
    });
}]);
bibliotek.controller('ControllerReceiver2', ['$scope', 'MOService', function ($scope, MOService) {
    $scope.$on("getMessage", function () {
        $scope.message = 'R2 : ' + MOService.message;
    });
}]);
bibliotek.controller('ControllerReceiver3', ['$scope', 'MOService', function ($scope, MOService) {
    $scope.$on("getMessage", function () {
        $scope.message = 'R3 : ' + MOService.message;
    });
}]);


bibliotek.controller('MyCtrl1', ['$scope', function ($scope) {
    $scope.text = "view one";
}]);

bibliotek.controller('MyCtrl2', ['$scope', function ($scope) {
    $scope.message = "view two";
}]);
/*
 * We could config like below:
 *  .controller('AccordionDemoCtrl', ['$scope', function (skop) {
 * skop.oneAtATime = true;
 * ...
 * */
bibliotek.controller('AccordionDemoCtrl', ['$scope', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title:"Dynamic Group Header - 1",
            content:"Dynamic Group Body - 1"
        },
        {
            title:"Dynamic Group Header - 2",
            content:"Dynamic Group Body - 2"
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };
}]);

