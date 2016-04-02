var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SongSchema = new Schema({
  song_title: String,
  artist: String,
  album: String,
  release_year: Number,
  genres: Array,
});

var Songs = mongoose.model('Songs', SongSchema);

module.exports = Songs;
