(function () {
  'use strict';

  angular
    .module('app.home')
    .run(appRun);

  appRun.$inject = ['$rootScope', '$anchorScroll', '$stateParams', '$location', 'routerHelper'];
  /* @ngInject */
  function appRun($rootScope, $anchorScroll, $stateParams, $location, routerHelper) {
    routerHelper.configureStates(getStates());

    $rootScope.$on('$locationChangeSuccess', function () {
      $anchorScroll();
    });
  }

  function getStates() {
    return [
      {
        state: 'home',
        config: {
          url: '/flickr',
          templateUrl: 'app/home/search.flickr.photos.html',
          controller: 'SearchPhotoController',
          controllerAs: 'searchPhoto',
          params: { freeTextSearch: null, origin: null },
          title: 'Flickr Photos',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Flickr Photos'
          }
        }
      }
    ];
  }
})();
