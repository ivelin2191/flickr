/* jshint -W106 */
(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('DetailsPhotoController', DetailsPhotoController);

  DetailsPhotoController.$inject = ['$state', '$stateParams', 'flickrPhotoService'];
  /* @ngInject */
  function DetailsPhotoController($state, $stateParams, flickrPhotoService) {
    var vm = this;
    vm.$state = $state;
    vm.photo = $stateParams.photo || {};
    vm.origin = $stateParams.origin || '';
    vm.flickrPhotoService = flickrPhotoService;
    vm.findExistindPhoto();
  }

  DetailsPhotoController.prototype.cancel = function cancel() {
    var vm = this;
    vm.$state.go(vm.origin, { freeTextSearch: vm.flickrPhotoService.getSearchParam() });
  };

  DetailsPhotoController.prototype.findExistindPhoto = function findExistindPhoto() {
    var vm = this;
    vm.photo.url_z = vm.photo.url_z || vm.photo.url_m || vm.photo.url_o;
  };

})();
