'use strict';

/* Controllers */

var bibliotek = angular.module('bibliotek.controllers', []);
var students = [
    {name:'Mary Contrary', id:'1'},
    {name:'Jack Sprat', id:'2'},
    {name:'Jill Hill', id:'3'}
];


bibliotek.controller('digitFormController',['$scope', function($scope){

}]);

bibliotek.controller('sampleFormController',['$scope', function ($scope) {
    $scope.serverrsp={};

    $scope.isUnchanged = function(user) {
        return angular.equals(user, $scope.serverrsp);
    };

   $scope.save = function(){

       $scope.status={};
       $scope.status.msg ="Successfully added";
       $scope.serverrsp=angular.copy($scope.user);



   };

    $scope.reset = function(){
        $scope.serverrsp={};
        $scope.user={};
    };

    $scope.reset();
}]);

bibliotek.controller('DeathrayMenuController', ['$scope', function ($scope) {
    $scope.menuState.show = false;
    $scope.toggleMenu = function () {
        window.alert("toggleMenu");
        $scope.menuState.show = !$scope.menuState.show;
    };

    $scope.stun = function () {
       window.alert("stun");
    };
    $scope.disintegrate = function () {
        window.alert("disintegrate");
    };
    $scope.erase = function () {
        window.alert("erase");
    };
}]);

bibliotek.controller('StudentListController', ['$scope', function ($scope) {
    $scope.students = students;
    $scope.insertTom = function () {
        $scope.students.splice(1, 0, {name:'Tom Thumb', id:'4'});
    };
}]);

bibliotek.controller('ControllerOriginate', ['$scope', 'MOService', function ($scope, MOService) {

    $scope.push = function (msg) {
        MOService.receiveMessage(msg);
    };

    $scope.$on("getMessage", function () {
        $scope.message = '';
        $scope.msgText = 'Orgi : ' + MOService.message;
    });

}]);


bibliotek.controller('ControllerReverse', ['$scope', function ($scope) {
    $scope.reverseMessage = function (message) {
        return message.split("").reverse().join("");
    }
}]);

bibliotek.controller('ControllerInput', ['$scope', function ($scope) {

}]);

bibliotek.controller('ControllerOne', ['$scope', function ($scope) {

}]);

bibliotek.controller('ControllerTwo', ['$scope', function ($scope) {

}]);

bibliotek.controller('ControllerThree', ['$scope', function ($scope) {

}]);

bibliotek.controller('ControllerTextOne', ['$scope', function ($scope) {

}]);

bibliotek.controller('ControllerTextTwo', ['$scope', function ($scope) {

}]);

bibliotek.controller('ControllerTextThree', ['$scope', function ($scope) {

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

