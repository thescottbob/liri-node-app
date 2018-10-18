// Make it so liri.js can take in all of the following commandss:

// node liri.js concert-this <artist/band name here>
// node liri.js spotify-this-song '<song name here>'
// node liri.js movie-this '<movie name here>'
// node liri.js do-what-it-says

require("dotenv").config();

// Include the request npm package
var request = require("request");

// If the user enters the movie-this command without specifying a movie name, they will get data for 'Mr. Nobody'
request("http://www.omdbapi.com/?apikey=trilogy&t=Mr.+Nobody", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover the following info
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDb Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Value);
    console.log("Country Produced In: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
  else {
    console.log(error);
  }
});

var keys = function keys( object ) {

  return Object.keys( object );

};

// If the user enters the spotify-this-song command without specifying a song, they will get data for 'The Sign' by Ace of Base

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
  
  spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
  console.log(data); 
  });