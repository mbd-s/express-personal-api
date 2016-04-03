var db = require('./models');

var new_profile = {
  name: "Michael Silverberg",
  github_link: "https://github.com/mbd-s",
  github_profile_image: "https://avatars0.githubusercontent.com/u/13588399",
  current_city: "Berlin",
  pets: [
    {
      name: "Moku",
      type: "cat",
      color: "black"
    },
    {
      name: "Frances",
      type: "cat",
      color: "grey"
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
    ],
  link: "https://www.youtube.com/embed/JtnykF4ABMI"
  },
  {
  title: "The Expanding Universe",
  artist: "Laurie Spiegel",
  album: "The Expanding Universe",
  release_year: 1980,
  genre: [
    "Electronic",
    "Ambient"
    ],
  link: "https://www.youtube.com/embed/dYUZmsfm4Ww"
  },
  {
  title: "Bach: Goldberg Variations, BWV 988",
  artist: "Glenn Gould",
  album: "Bach: The Goldberg Variations",
  release_year: 1981,
  genre: [
    "Classical"
    ],
  link: "https://www.youtube.com/embed/zpsfhTxo5yw"
  },
  {
  title: "Hallogallo",
  artist: "Neu!",
  album: "Neu!",
  release_year: 1972,
  genre: [
    "Krautrock"
  ],
  link: "https://www.youtube.com/embed/EAXYMOgHQI4"
  },
  {
  title: "Spheres",
  artist: "Gianni Safred & His Electronic Instruments",
  album: "Electronic Designs",
  release_year: 1977,
  genre: [
    "Electronic"
    ],
    link: "https://www.youtube.com/embed/Ke0AVIuf6Mo"
  },
  {
  title: "Franz Schubert",
  artist: "Kraftwerk",
  album: "Trans-Europe Express",
  release_year: 1977,
  genre: [
    "Krautrock",
    "Electronic"
    ],
    link: "https://www.youtube.com/embed/tJqnc_0mZmA"
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
