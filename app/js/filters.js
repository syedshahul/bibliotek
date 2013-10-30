'use strict';

/* Filters */

var bibliotek = angular.module('bibliotek.filters', []);

bibliotek.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

bibliotek.filter('reverse', function(){
    return function(text){
      return text.split("").reverse().join("");
    }
});

bibliotek.filter('checkmark', function(){
    return function(input){
     return input ? '\u2713' : '\u2718';
    }
});