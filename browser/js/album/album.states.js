// ALBUMS VIEW
juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/albums.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('singleAlbum', {
    url: '/albums/:albumId',
    templateUrl: '/singleAlbum.html',
    controller: 'AlbumCtrl'
  });
});
