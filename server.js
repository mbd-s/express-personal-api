// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/mbd-s/express_self_api/",
    base_url: "http://apricot-cobbler-79321.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/songs", description: "Return a list of all songs"},
      {method: "POST", path: "/api/songs", description: "Suggest a new song"}
    ]
  });
});

// get profile
app.get('/api/profile', function (req, res) {
  db.Profile.find(function(err, profile) {
    if (err) {
      return console.log("index error: " + err);
    }
    res.json(profile);
  });
});

// get all songs
app.get('/api/songs', function (req, res){
  db.Songs.find(function(err, songs){
    if (err){
      return console.log("index error: " + err);
    }
    res.json(songs);
  });
});

// create a new song
app.post('/api/songs', function(req, res){
  var newSong = new db.Songs({
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
    link: req.body.link,
  });

  newSong.save(function(err, song){
        if (err) {
          console.log("Save error: " + err);
        }
        console.log("Saved ", song.title);
        res.json(song);
  });
});

/**********
 * SERVER *
 **********/

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
