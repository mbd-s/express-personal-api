// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

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

db.Profile.create(new_profile, function(err, profile){
  if (err){
    return console.log("Error:", err);
  }
  console.log("Created new profile", profile._id);
  process.exit();
});
