/* jshint -W101 */
(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('SearchPhotoController', SearchPhotoController);

  SearchPhotoController.$inject = ['$q', '$state', '$stateParams', 'flickrPhotoService', 'utilityService', 'commonConstant'];
  /* @ngInject */
  function SearchPhotoController($q, $state, $stateParams, flickrPhotoService, utilityService, commonConstant) {
    var vm = this;
    vm.flickrPhotoService = flickrPhotoService;
    vm.utilityService = utilityService;
    vm.commonConstant = commonConstant;
    vm.$state = $state;
    vm.freeTextSearch = $stateParams.freeTextSearch || '';
    vm.photos = vm.flickrPhotoService.getSearchPhotos() || [];
    vm.busy = false;
    vm.page = vm.flickrPhotoService.getPage() || '';
  }

  SearchPhotoController.prototype.search = function search() {
    var vm = this;
    if (vm.utilityService.checkPhotoSearchData(vm.freeTextSearch)) {
      vm.busy = true;
      vm.page = 1;
      vm.flickrPhotoService.clearSearchPhotos();
      vm.flickrPhotoService.searchPhotos(vm.freeTextSearch, vm.page)
        .then(function (data) {
          vm.photos = data;
          vm.busy = false;
        });
    }
  };

  SearchPhotoController.prototype.showResultFromSearch = function showResultFromSearch() {
    var vm = this;
    if (vm.utilityService.checkPhotoSearchData(vm.freeTextSearch)) {
      return true;
    }
    return false;
  };

  // Infinity scroll
  SearchPhotoController.prototype.nexPage = function nexPage() {
    var vm = this;
    if (vm.busy || !vm.freeTextSearch && vm.freeTextSearch.length < vm.commonConstant.MIN_SEARCH_CHAR) {
      return;
    }
    vm.busy = true;
    vm.flickrPhotoService.searchPhotos(vm.freeTextSearch, ++vm.page)
      .then(function (data) {
        if (Array.isArray(data) && data.length === 0) {
          vm.busy = true;
          return;
        }

        [].push.apply(vm.photos, data);
        vm.busy = false;
      },
      function (error) {
        console.log(error);
      });
  };

  SearchPhotoController.prototype.goToDetailsPhoto = function goToDetailsPhoto(photo) {
    var vm = this;
    vm.$state.go('detailsPhoto', { photo: photo, origin: 'home' });
  };

})();

