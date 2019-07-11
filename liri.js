const axios = require('axios');




require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
// var input = process.argv[3].slice(3).join(" ")
var input = process.argv[3];




switch (command) { // swith switches between the cases based on the command cases

    case "concert-this": //concert this is a command, if "concert this " isn't entered
        getConcertInfo(input);
        break;

    case "spotify-this-song": //if command is "spotify this song" search from spotify api
        getSpotify(input);
        break;

    case "movie-this"://if command is "spotify this song" search from IMBDB api
        getMovie(input);
        break;

    case "do-what-it-says": //if command is "do what it says, reads from read file"
        doWhat(input);
        break;
}

function getConcertInfo(byArtistName) {
    var bandsURL = "https://rest.bandsintown.com/artists/" + byArtistName + "/events?app_id=codingbootcamp"

    axios.get(bandsURL)
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

function getSpotify(songName) {

    spotify
        .search({ type: 'track', query: songName })
        .then(function (response) {
            // console.log("\n----------\n");
            // console.log(JSON.stringify (response.tracks,null,2));
            //console.log(response.tracks);
            // console.log("\n----------\n");
            // console.log('\n*******\n', response.tracks.items[0], '\n*******\n');
            for (var i = 0; i < response.tracks.items.length; i++) {

                // Artist Name
                console.log("artist name " + response.tracks.items[i].artists[0].name);
                // Song Name
                console.log("song title :" + response.tracks.items[i].name);

                // Preview link
                console.log("preview " + response.tracks.items[i].artists[0].external_urls.spotify);
                // Album Name
                console.log("album name :" + response.tracks.items[i].album.name);
            }


        })
        .catch(function (err) {
            console.log(err);
        });
}

function getMovie(movieName) {

    var movieURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=b3c0b435"

    axios.get(movieURL)
        .then(function (response) {
            // handle success
            console.log("title: " + response.data.Title);
            console.log("year: " + response.data.Year);
            console.log("ratings: " + JSON.stringify(response.data.Ratings));
            //ratings only show [object]
            console.log("country: " + response.data.Country);
            console.log("language: " + response.data.Language);
            console.log("Actors: " + response.data.Actors);
            console.log("Plot: " + response.data.Plot);
            //want to clean up above code.
        })
        .catch(function (error) {

            console.log(error);
            //need to output Mr. Nobody if user doesn't type in movie name
        })

}
