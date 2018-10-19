// Make it so liri.js can take in all of the following commandss:

// node liri.js concert-this <artist/band name here>
// node liri.js spotify-this-song '<song name here>'
// node liri.js movie-this '<movie name here>'
// node liri.js do-what-it-says

require("dotenv").config();

// Include the request npm package
var request = require("request");

if(process.argv.length === 3){

  // If the user enters the movie-this command without specifying a movie name, they will get data for 'Mr. Nobody'
  request("http://www.omdbapi.com/?apikey=trilogy&plot=short&t=Mr.+Nobody", function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // Parse the body of the site and recover the following info
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDb Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country Produced In: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
      }
      else {
        console.log(error);
        }
    });
  } 
  else if(process.argv.length === 4){

  var userInput= process.argv[3];

  // If the user enters the movie-this command and specifies a movie name, they will get data for the movie they entered
  request(`http://www.omdbapi.com/?apikey=trilogy&plot=short&t=${userInput}`, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // Parse the body of the site and recover the following info
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDb Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country Produced In: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
      }
      else {
        console.log(error);
      }
    });
  }



// If the user enters the spotify-this-song command without specifying a song, they will get data for 'The Sign' by Ace of Base

// var Spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);
  
//   spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
  
//   console.log(data); 
//   });