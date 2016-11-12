/* jshint -W101, -W106 */
(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('flickrPhotoService', flickrPhotoService);

  flickrPhotoService.$inject = ['$http', '$q'];
  /* @ngInject */
  function flickrPhotoService($http, $q) {
    var searchParam,
      page,
      photos = [];

    return {
      searchPhotos: searchPhotos,
      getSearchPhotos: getSearchPhotos,
      clearSearchPhotos: clearSearchPhotos,
      getSearchParam: getSearchParam,
      getPage: getPage,
      setPage: setPage
    };

    function searchPhotos(searchData, page) {
      var deferred = $q.defer();

      setSearchParam(searchData);
      setPage(page);
      $http.get('https://api.flickr.com/services/rest/', {
        params: {
          method: 'flickr.photos.search',
          api_key: '2a45e3defd314e3ec460cdfb8fffc98b',
          format: 'json',
          nojsoncallback: 1,
          extras: 'description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
          per_page: '20',
          sort: 'interestingness-desc',
          page: page,
          text: searchData
        }
      })
        .then(function (response) {
          var photos = setFlickrLinks(response.data.photos.photo);
          setSearchPhotos(photos);
          deferred.resolve(photos);
        },
        function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function getSearchPhotos() {
      return photos;
    }

    function setSearchPhotos(data) {
      [].push.apply(photos, data);
    }

    function clearSearchPhotos() {
      photos = [];
    }

    function getSearchParam() {
      return searchParam;
    }

    function setSearchParam(search) {
      searchParam = search;
    }

    function setFlickrLinks(photos) {
      return photos.map(function (photo) {
        photo.flickrPhotoLink = 'https://www.flickr.com/photos/' + photo.owner + '/' + photo.id;
        photo.flickrAuthorLink = 'https://www.flickr.com/people/' + photo.owner;
        return photo;
      });
    }

    function getPage() {
      return page;
    }

    function setPage(currentPage) {
      page = currentPage;
    }
  }
})();
