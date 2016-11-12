(function () {
  'use strict';

  var $inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  var Routing = function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('detailsPhoto', {
        url: '/detailsPhoto',
        templateUrl: 'app/home/details.flickr.photos.html',
        controller: 'DetailsPhotoController',
        controllerAs: 'detailsPhoto',
        params: {photo:null, origin: null}
      });
  };

  Routing.$inject = $inject;
  angular.module('app.home', [
    'infinite-scroll',
    'app.core',
    'app.widgets'
  ]).config(Routing);

})();
