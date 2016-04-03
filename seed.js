var db = require('./models');

var new_profile = {
  name: "Michael Silverberg",
  github_link: "https://github.com/mbd-s",
  github_profile_image: "https://avatars0.githubusercontent.com/u/13588399",
  current_city: "Berlin",
  pets: [
    {
      name: "Moku", type: "cat", color: "black"
    },
    {
      name: "Frances", type: "cat", color: "grey"
    }
  ]
};

var song_list = [
  {
  title: "Mit Simaen",
  artist: "Cluster",
  album: "Cluster & Eno",
  release_year: 1977,
  genre: [
    "Ambient",
    "Electronic",
    "Krautrock"
    ]
  },
  {
  title: "The Expanding Universe",
  artist: "Laurie Spiegel",
  album: "The Expanding Universe",
  release_year: 1980,
  genre: [
    "Electronic",
    "Ambient"
    ]
  },
  {
  title: "Bach: Goldberg Variations, BWV 988",
  artist: "Glenn Gould",
  album: "Bach: The Goldberg Variations",
  release_year: 1981,
  genre: [
    "Classical"
    ]
  },
  {
  title: "Hallo Gallo",
  artist: "Neu!",
  album: "Neu!",
  release_year: 1972,
  genre: [
    "Krautrock"
    ]
  },
  {
  title: "Spheres",
  artist: "Gianni Safred & His Electronic Instruments",
  album: "Electronic Designs",
  release_year: 1977,
  genre: [
    "Electronic"
    ]
  }
];

db.Profile.remove({}, function(err, profile){
  if (err) {
    console.log('An error occurred during profile removal.');
  }
    console.log('Your profile was removed.');

  db.Profile.create(new_profile, function(err, profile){
    if (err){
      return console.log('err', err);
    }
      console.log('Re-created your profile.');
  });

    db.Songs.remove({}, function(err, songs){
      if (err){
        console.log('An error occurred during song removal.');
      }
        console.log('All songs were removed.');

        db.Songs.create(song_list, function(err, songs){
          if (err){
            return console.log('Error: ', err);
          }
          console.log('Created', songs.length, 'new songs.');
          process.exit();
        });
    });
});
