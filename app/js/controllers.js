'use strict';

/* Controllers */

angular.module('bibliotek.controllers', [])
    .controller('MyCtrl1', ['$scope', function ($scope) {
    $scope.text = "view one";
}])
    .controller('MyCtrl2', ['$scope', function ($scope) {
    $scope.message = "view two";
}])
    /*
     * We could config like below:
     *  .controller('AccordionDemoCtrl', ['$scope', function (skop) {
     * skop.oneAtATime = true;
     * ...
     * */
    .controller('AccordionDemoCtrl', ['$scope', function ($scope) {
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

