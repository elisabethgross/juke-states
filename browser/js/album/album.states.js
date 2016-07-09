// ALBUMS VIEW
juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/templates/albums.html',
    resolve: {
      albums: function (AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  });
});

// SINGLE ALBUM VIEW
juke.config(function ($stateProvider) {
  $stateProvider.state('singleAlbum', {
    url: '/albums/:albumId',
    templateUrl: '/templates/singleAlbum.html',
    resolve: {
      album: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    },
    controller: 'AlbumCtrl'
  });
});
