// ARTISTS VIEW
juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/artists.html',
    controller: 'ArtistsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider
  .state('singleArtist', {
    url: '/artists/:artistId',
    templateUrl: '/singleArtist.html',
    controller: 'ArtistCtrl'
  })
  .state('singleArtist.albums', {
    url: '/albums',
    templateUrl: '/artistAlbums.html',
    controller: 'AlbumsCtrl'
  })
  .state('singleArtist.songs', {
    url: '/songs',
    templateUrl: '/artistSongs.html',
    controller: 'ArtistCtrl'
  });
});

