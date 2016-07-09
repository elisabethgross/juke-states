// ARTISTS VIEW
juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/templates/artists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    },
    controller: 'ArtistsCtrl'
  });
});

// SINGLE ARTIST VIEW
juke.config(function ($stateProvider) {
  $stateProvider
  .state('singleArtist', {
    url: '/artists/:artistId',
    templateUrl: '/templates/singleArtist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.artistId);
      }
    },
    controller: 'ArtistCtrl'
  })
  .state('singleArtist.albums', {
    url: '/albums',
    templateUrl: '/templates/artistAlbums.html',
    controller: 'ArtistCtrl'
  })
  .state('singleArtist.songs', {
    url: '/songs',
    templateUrl: '/templates/artistSongs.html',
    controller: 'ArtistCtrl'
  });
});

