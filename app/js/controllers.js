'use strict';

/* Controllers */

var bibliotek = angular.module('bibliotek.controllers', []);

/* route handler*/

bibliotek.controller('routeCtrl',['$rootScope',function($rootScope){
	$rootScope.$on("$routeChangeError",
								 function (event, current, previous, rejection) {
									 console.log("failed to change routes");
								 });
}]);

var viewCtrl = bibliotek.controller("ViewCtrl", function ($scope) {
	$scope.model = {
		message: "I'm a great app!"
	}
});

viewCtrl.loadData = function ($q, $timeout) {
	var defer = $q.defer;
	$timeout(function () {
		defer.reject("loadData");
	}, 2000);
	return defer.promise;
};

/* promises*/
bibliotek.controller('promiseCtrl',['$scope','$q', function($scope, $q){
	//assign Offers service object to controller scope variable
	var defer = $q.defer();
	defer.promise
			.then(function(){
		alert("I promise I'll get it...")
				return "1st input";
	})
			.then(function(input){
							alert("I promise "+input);
								return " 2nd input ";
						})
			.then(function(input){
							alert("I promise I'll also :" +input)
						})

	defer.resolve();
	$scope.message ="I am done";
}]);

/*route param*/
bibliotek.controller('RouteParamCtrl',['$scope','$routeParams',function($scope,$routeParams){
	console.log($routeParams.name);
	console.log($routeParams.email);
	console.log($routeParams.mobile);
	$scope.name=$routeParams.name;
	$scope.email=$routeParams.email;
	$scope.mobile=$routeParams.mobile;

}]);
bibliotek.controller('studentsController',['$scope','Students', function($scope, Students){
    //assign Offers service object to controller scope variable
    $scope.students=Students;
    $scope.showCount=2;
}]);


bibliotek.controller('digitFormController',['$scope', function($scope){

}]);

bibliotek.controller('tweetController',['$scope', function($scope){
    $scope.loadMoreTweets= function(){
        console.info("loading tweets...")
    }

    $scope.deleteTweets= function(){
        console.info("deleting tweets...")
    }
}]);


bibliotek.controller("accordionCtrl", ['$scope', function ($scope) {
    $scope.acrdexpanders=[
        {title:"Accordion 1", text:"You are viewing Accordion 1 text"},
        {title:"Accordion 2", text:"You are viewing Accordion 2 text"},
        {title:"Accordion 3", text:"You are viewing Accordion 3 text"}
    ];


}]);

bibliotek.controller("scopeIsolateCtrl", ['$scope', function ($scope) {
/*	$scope.products=[
		{name:"Accordion 1", description:"You are viewing Accordion 1 text"},
		{name:"Accordion 2", description:"You are viewing Accordion 2 text"},
		{name:"Accordion 3", description:"You are viewing Accordion 3 text"}
	];*/
	$scope.productname="Accordion 1";
}]);


bibliotek.controller("expandCtrl", ['$scope', function ($scope) {
    $scope.title="Bingo";
    $scope.text="Hi, you are seeing this message because you clicked to expand... blah blah blah...";
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

