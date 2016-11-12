(function() {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/flickr';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [];
  }
})();
