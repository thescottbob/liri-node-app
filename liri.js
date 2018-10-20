// The purpose of this file is to allow the user to enter any of the below commands via the command line and receive relevant results

// node liri.js concert-this <artist/band name here>
// node liri.js spotify-this-song '<song name here>'
// node liri.js movie-this '<movie name here>'
// node liri.js do-what-it-says

require("dotenv").config();

// Include the request npm package
var request = require("request");

//The below if/else statement controls for two use cases while hitting the OMDb API: 
// 1) The user enters node liri.js movie-this and does not specify any movie, OR 
// 2) The user enters node liri.js movie-this <movie name here>
if(process.argv.lenth === 3 && process.argv[2] === "movie-this"){

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
  else if(process.argv[2] === "movie-this" && process.argv.length >= 4){

  //The below variable includes five 'process.argv's' because each one represents one word in the movie title the user is searching for
  //In other words, the code will check the first *5* words in the movie title the user searches for to find the closest match on OMDb
  var userInput= process.argv.splice(3).join(" ");

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

  //The below if/else statement controls what happens when the user enters node liri.js concert-this <artist/band name here>
if(process.argv[2] === "concert-this"){

  var artist_or_band = process.argv.splice(3).join(" ");

  request(`https://rest.bandsintown.com/artists/${artist_or_band}/events?app_id=3130198cea598ac71a66d6a789681ef8`, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var result = JSON.parse(body);
        // Parse the body of the site and recover the following info
        console.log("Venue Name: " + result.VenueData.name);
        console.log("Venue Location: " + result.EventData.venue + ", " + results.VenueData.city 
        + ", " + result.VenueData.region + ", " + result.VenueData.country);
        console.log("Event Date: " + result.EventData.datetime);
      }
      else {
        console.log(error);
        }
    });
  } 

  // var Spotify = require('node-spotify-api');
 
  // var spotify = new Spotify({
  //   id: <exports.spotify.id>,
  //   secret: <exports.spotify.secret>
  // });
   
  // spotify
  //   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  //   .then(function(data) {
  //     console.log(data); 
  //   })
  //   .catch(function(err) {
  //     console.error('Error occurred: ' + err); 
  //   });