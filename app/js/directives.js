'use strict';

/* Directives */


var bibliotek = angular.module('bibliotek.directives', []);

bibliotek.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

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
