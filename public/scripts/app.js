console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$.ajax({
  method: 'GET',
  url: '/api/profile',
  success: onSuccess,
  error: onError
});

function onSuccess(json){
  $('#profile-display').text(json);
}

function onError(e) {
  console.log('uh oh');
  $('#profile-display').text('Failed to load profile.');
}
});
