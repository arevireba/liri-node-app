require("dotenv").config();
var fs = require(fs);
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");


var client = new twitter(exports.twitter);
console.log(client)

// var nodeArgs = process.argv;

// var movieName = "";

// for(var i = 2; i < nodeArgs.length; i++){
//     if(i > 2 && i < nodeArgs.length) {
//         movieName = movieName+ "+" + nodeArgs[i];
//     }
//     else {
//         movieName += nodeArgs[i];
//     }
// }

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

// //console.log(queryUrl);

// request(queryUrl, function(error, response, body){
//     if (!error && response.statusCode === 200) {
//         console.log("Movie title: " + JSON.parse(body).Title);
//         console.log("Year of release: " + JSON.parse(body).Year);
//         console.log("IMDB Rating of " + JSON.parse(body).imdbRating);
//         console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
//         console.log("Country of Production: " + JSON.parse(body).Country);
//         console.log("Movie Language: " + JSON.parse(body).Language);
//         console.log("Movie Plot: " + JSON.parse(body).Plot);
//         console.log("Actors: " + JSON.parse(body).Actors)

//     }
// })

