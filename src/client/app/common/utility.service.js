(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('utilityService', utilityService);

  utilityService.$inject = ['$http', '$q', '$timeout', 'commonConstant'];
  /* @ngInject */
  function utilityService($http, $q, $timeout, commonConstant) {
    return {
      checkPhotoSearchData: checkPhotoSearchData
    };

    function checkPhotoSearchData(freeTextSearch) {
      if (freeTextSearch && freeTextSearch.length >= commonConstant.MIN_SEARCH_CHAR) {
        return true;
      }
      return false;
    }

  }
})();

