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

  $('#newSongForm').on('submit', function(e) {
    e.preventDefault();
    console.log('New song serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/songs',
      data: $(this).serializeArray(),
      success: newSongSuccess,
      error: newSongError
    });
  });

  $songsList.on('click', '.deleteBtn', function() {
    console.log('Clicked delete button to', '/api/songs/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/songs/'+$(this).attr('data-id'),
      success: deleteSongSuccess,
      error: deleteSongError
    });
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
  $songsList.append('Failed to load songs.');
}

function newSongSuccess(json) {
  $('#newSongForm input').val('');
  allSongs.push(json);
  render();
}

function newSongError() {
  console.log('New song error!');
}

function deleteSongSuccess(json) {
  var song = json;
  console.log(json);
  var songId = song._id;
  console.log('Deleting song', songId);
  for (var index = 0; index < allSongs.length; index++) {
    if(allSongs[index]._id === songId) {
      allSongs.splice(index, 1);
      break;
    }
  }
  render();
}

function deleteSongError() {
  console.log('Error deleting the song!');
}
