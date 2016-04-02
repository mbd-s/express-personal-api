console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$.ajax({
  method: 'GET',
  url: '/api/profile',
  success: onSuccess,
  error: onError
});

function onSuccess(json){
  $('#profileDisplay').append('<div><ul><li>' + json[0].name + '</li><li>' +
  '<a href="' + json[0].github_link + '">Github</a></li></ul></div>');
}

function onError(e) {
  console.log('uh oh');
  $('#profileDisplay').append('Failed to load profile.');
}
});

// var new_profile = {
//   name: "Michael Silverberg",
//   github_link: "https://github.com/mbd-s",
//   github_profile_image: "https://avatars0.githubusercontent.com/u/13588399",
//   current_city: "Berlin",
//   pets: [
//     {
//       name: "Moku", type: "cat", color: "black"
//     },
//     {
//       name: "Frances", type: "cat", color: "grey"
//     }
//   ]
// };
