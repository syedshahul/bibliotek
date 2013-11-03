'use strict';

/* Directives */
 /*
 * restrict “A”. “A” is for attribute (and its by default, so if didn't mentioned restrict key then Angular by default treat it as Attribute),
 * restrict “E” is for element,
 * restrict “C” for class,
 * restrict “M” for comment,
 *
 *
 * */

var bibliotek = angular.module('bibliotek.directives', []);

bibliotek.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

/* directive name should be lowercase.*/
bibliotek.directive("country", function(){
    return{
        restrict:"E",
        controller:function(){
            this.message=function(message){
               console.info("directive : country : "+message);
            }
        }
    }
});

bibliotek.directive("state", function(){
    return{
        restrict:"E",
        require:"^country",
        controller:function(){
            this.message=function(message){
                console.info("directive : state : "+message);
            }
        },
        link: function(scope, element, attrs, ctrls){
            ctrls.message("Hey Country, by state");
        }
    }
});

bibliotek.directive("city", function(){
    return{
        restrict:"E",
        require:["^country", "^state"],
        link: function(scope, element, attrs, ctrls){
          ctrls[0].message("Hey Country, by city");
            ctrls[1].message("Hey State, by city");
        }
    }
});

bibliotek.directive("clock", function(){
    return {
        restrict:"E",
       scope:{
           timezone:"@"
       },
        template:"<div>10:00pm {{timezone}}</div>"
    }
});

bibliotek.directive("clockpanel", function(){
    return {
        restrict:"E",
        scope:{
            title:"@"
        },
        transclude:true,
        template:"<div class='btn' ng-transclude><div class='alert-info'>{{title}}</div></div>"
    }
});

bibliotek.directive("panel", function(){
    return {
        restrict:"E",
        transclude:true,
        template:"<div class='btn' ng-transclude>Button component</div>",
        link: function(scope, element){
            element.bind("click", function(){

                console.info("button clicked");
            })
        }
    }
});

bibliotek.directive("master", function(){
    return {
    restrict:"E",
      scope:{},
    controller:function($scope){
        $scope.abilities=[];
       this.addStrength=function(){
          $scope.abilities.push("strength")
       }

        this.addSpeed=function(){
            $scope.abilities.push("speed")
        }
        this.addFlight=function(){
            $scope.abilities.push("flight")
        }
    },
    link: function(scope, element){
        element.addClass("btn");
        element.bind("mouseenter", function(){

            console.log(scope.abilities);
        })
    }
    }
});

bibliotek.directive("strength", function(){
    return{
        require:"master",
        link:function(scope, element, attrs, masterCtrl){
           masterCtrl.addStrength();
        }
    }
});

bibliotek.directive("flight", function(){
    return{
        require:"master",
        link:function(scope, element, attrs, masterCtrl){
            masterCtrl.addFlight();
        }
    }
});

bibliotek.directive("speed", function(){
    return{
        require:"master",
        link:function(scope, element, attrs, masterCtrl){
            masterCtrl.addSpeed();
        }
    }
});

bibliotek.directive("loadtweet", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            scope.$apply(attrs.loadtweet);
            console.info("process tweets...");
        })
    }
});

bibliotek.directive("deletetweet", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            scope.$apply(attrs.loadtweet);
            console.info("delete tweets...");
        })
    }
});

bibliotek.directive("enterdiv", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            element.addClass(attrs.enterdiv);
            console.info("Enter div ");
        })
    }
});

bibliotek.directive("leavediv", function(){
    return function(scope,element, attrs){
        element.bind("mouseleave", function(){
            element.removeClass(attrs.enterdiv);
            console.info("leave div");
        })
    }
});

bibliotek.directive("enterouterdiv", function(){
   return function(scope, element){
      element.bind("mouseenter", function(){
          console.info("Inside outerdiv");
      })
   }
});

bibliotek.directive("leaveouterdiv", function(){
    return function(scope,element){
        element.bind("mouseleave", function(){
            console.info("left from outerdiv");
        })
    }
});

bibliotek.directive("enterinnerdiv", function(){
    return function(scope,element){
        element.bind("mouseenter", function(){
            console.info("Inside inner div");
        })
    }
});

bibliotek.directive("leaveinnerdiv", function(){
    return function(scope,element){
        element.bind("mouseleave", function(){
            console.info("left from innerdiv");
        })
    }
});

bibliotek.directive("attrtaxrequired", function(){
    return {
        restrict:"E",
        template: "<label class='text-info'> Tax required </label>"
    }
});

bibliotek.directive("attrtaxrequired", function(){
    return {
        restrict:"A",
        link: function(){
           //alert("Attribute attrtaxrequired works")
            console.info("Attribute attrtaxrequired works");
        }
    }
});

bibliotek.directive("flash", function(){
    return {
        restrict:"A",
        link: function(){
            //alert("Attribute flash works")
            console.info("Attribute flash works");
        }
    }
});

bibliotek.directive("attrtaxrequired", function(){
    return {
        restrict:"C",
        link: function(){
            //alert("Class works")
            console.info("Class works");
        }
    }
});

bibliotek.directive("attrtaxrequired", function(){
    return {
        restrict:"M",
        link: function(){
            //alert("Comment works")
            console.info("Comment works");
        }
    }
});

bibliotek.directive("lblstudentname", function(){
    return {
        restrict:"E",
        template: "<label class='text-info'> Student Name </label>"
    }
});

/* Smart Flot Directive*/
var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
bibliotek.directive('smartFloat', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if (FLOAT_REGEXP.test(viewValue)) {
                    ctrl.$setValidity('float', true);
                    return parseFloat(viewValue.replace(',', '.'));
                } else {
                    ctrl.$setValidity('float', false);
                    return undefined;
                }
            });
        }
    };
});

/* INTEGER DIRECTIVE */
var INTEGER_REGEXP = /^\-?\d*$/;
bibliotek.directive('integer', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if (INTEGER_REGEXP.test(viewValue)) {
// it is valid
                    ctrl.$setValidity('integer', true);
                    return viewValue;
                } else {
// it is invalid, return undefined (no model update)
                    ctrl.$setValidity('integer', false);
                    return undefined;
                }
            });
        }
    };
});
