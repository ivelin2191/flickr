/* jshint -W074 */
(function () {
  'use strict';

  angular
    .module('app.home')
    .filter('descriptionLimit', descriptionLimit);

  descriptionLimit.$inject = [];
  /* @ngInject */
  function descriptionLimit() {
    return function (value, wordwise, max, tail) {
      if (!value) {
        return '';
      }
      max = +max;
      if (!max) {
        return value;
      }
      if (value.length <= max) {
        return value;
      }
      value = value.substr(0, max);
      if (wordwise) {
        var lastspace = value.lastIndexOf(' ');
        if (lastspace !== -1) {
          if (value.charAt(lastspace - 1) === '.' || value.charAt(lastspace - 1) === ',') {
            lastspace = lastspace - 1;
          }
          value = value.substr(0, lastspace);
        }
      }
      return value + (tail || ' ...');
    };
  }
})();

