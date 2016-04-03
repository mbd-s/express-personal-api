console.log("Sanity Check: JS is working!");
var template;
var allSongs = [];

$(document).ready(function(){

  $songsList = $('#songsTarget');

  var source = $('#songs-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/songs',
    success: onSuccess,
    error: onError
  });

});

function render () {
  $songsList.empty();
  var songsHtml = template({ songs: allSongs });
  $songsList.append(songsHtml);
}

function onSuccess(json){
  allSongs = json;
  render();
}

function onError(e) {
  console.log('uh oh');
  $('#songsTarget').append('Failed to load songs.');
}
