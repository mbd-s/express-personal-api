var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  release_year: Number,
  genre: Array,
});

var Songs = mongoose.model('Songs', SongSchema);

module.exports = Songs;
