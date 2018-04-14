//import { twitter } from "./keys.js";

//Application linked files

//require("dotenv").config();
var fs = require("fs");
var request = require("request");
// var keys = require("./keys.js");
// var twitter = require("twitter");
// var spotify = require("spotify");
var liriCommand = process.argv[2];

//Application requirements
//my-tweets
//spotify-this-song
//movie-this
//do-what-it-says

//Function setup
switch(liriCommand) {
    case "my-tweets": myTweets(); break;

    case "spotify-this-song": spotifyThisSong(); break;

    case "movie-this": movieThis(); break;

    case "do-what-it-says": doWhatItSays(); break;
};

//Function my-tweets setup
// function myTweets() {
//     var client = new twitter({
//         consumer_key: keys.consumer_key,
//         consumer_secret: keys.consumer_secret,
//         access_token_key: keys.access_token_key,
//         access_token_secret: keys.access_token_secret, 
//     });
//     var twitterName = process.argv[3];
//     client.get("statuses/user_timeline/", "AbeinTempe", function(error, data, response){
//         if(!error) {
//             for(var i=0; i< data.length; i++) {
//                 console.log(response);
//                 var twitterResponse =
//                 "@AbeinTempe" + ": " +
//                 data[i].text + "\r\n" +
//                 data[i].created_at + "\r\n";
//             }
//         };


//Function movie-this setup
function movieThis() {
    var movieName = process.argv[3];
    if (!movieName) {
        movieName = "mr. nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    //console.log(queryUrl);

    request(queryUrl, function(error, response, body){
         if (!error && response.statusCode === 200) {
             console.log("Movie title: " + JSON.parse(body).Title);
             console.log("Year of release: " + JSON.parse(body).Year);
             console.log("IMDB Rating of " + JSON.parse(body).imdbRating);
             console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
             console.log("Country of Production: " + JSON.parse(body).Country);
             console.log("Movie Language: " + JSON.parse(body).Language);
             console.log("Movie Plot: " + JSON.parse(body).Plot);
             console.log("Actors: " + JSON.parse(body).Actors)
        } else {
            console.log("Error number: " + error);
            return;
        }
    }
    )}