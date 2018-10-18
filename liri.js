// Make it so liri.js can take in all of the following commandss:

// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

require("dotenv").config();

function Spotify() {
  // search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
  
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
  console.log(data); 
  });

};

var spotify = new Spotify(keys.spotify);


// node liri.js spotify-this-song '<song name here>'

const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)