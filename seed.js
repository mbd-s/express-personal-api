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
  genre: [
    "Electronic",
    "Ambient"
    ],
  link: "https://www.youtube.com/embed/dYUZmsfm4Ww"
  },
  {
  title: "Bach: Goldberg Variations, BWV 988",
  artist: "Glenn Gould",
  genre: [
    "Classical"
    ],
  link: "https://www.youtube.com/embed/zpsfhTxo5yw"
  },
  {
  title: "Hallogallo",
  artist: "Neu!",
  genre: [
    "Krautrock"
  ],
  link: "https://www.youtube.com/embed/EAXYMOgHQI4"
  },
  {
  title: "Spheres",
  artist: "Gianni Safred & His Electronic Instruments",
  genre: [
    "Electronic"
    ],
    link: "https://www.youtube.com/embed/Ke0AVIuf6Mo"
  },
  {
  title: "Franz Schubert",
  artist: "Kraftwerk",
  genre: [
    "Krautrock",
    "Electronic"
    ],
    link: "https://www.youtube.com/embed/tJqnc_0mZmA"
  },
  {
  title: "Sing Out My Soul",
  artist: "Goretti Group",
  genre: [
    "Trinadadian Gospel"
    ],
    link: "https://www.youtube.com/embed/MXVVT0eyzFo"
  },
  {
  title: "Tana's Theme",
  artist: "Ray Sherman",
  genre: [
    "Mariachi Noir",
    "Player Piano"
    ],
    link: "https://www.youtube.com/embed/OnBAmytGtQ4"
  },
  {
  title: "Ode til Heimaey",
  artist: "Sume",
  genre: [
    "Greenlandic psych rock"
    ],
    link: "https://www.youtube.com/embed/LQjohBMmVhI"
  },
  {
  title: "In the Summer",
  artist: "Terry Riley",
  genre: [
    "Classical",
    "Minimalist"
    ],
    link: "https://www.youtube.com/embed/tFYjbwrN9DU"
  },
  {
  title: "a2 (Max Cooper remix)",
  artist: "Olafur Arnalds & Nils Frahm",
  genre: [
    "Electronic"
    ],
    link: "https://www.youtube.com/embed/dfKOUrTqvlA"
  },
  {
  title: "Schumann: Kinderszenen, Op. 15",
  artist: "Martha Argerich",
  genre: [
    "Classical"
    ],
    link: "https://www.youtube.com/embed/NdqBfMb3pX0"
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
