//import {"twitter"} from "./keys.js";

//Application linked files

require("dotenv").config();
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");

//Defining command after "node liri.js" on command line
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
    function myTweets(){
        var client = new twitter(keys.twitter);
        //     consumer_key: process.env.TWITTER_CONSUMER_KEY,
        //     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        //     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        //     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        // });

        var params = { screen_name: 'AbeinTempe' };

        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            
            if (!error) {
            for(i = 1; i < tweets.length; i++){
                console.log("On " + tweets[i].date)
                console.log("@AbeinTempe tweeted: " + tweets[i]);
            }
          }else{
            console.log('Error using my-tweets');
          }
        });
      }

//Function movie-this setup
    function movieThis() {
        var movieName = process.argv[3];
        if (!movieName) {
            movieName = "Mr. Nobody";
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
                } 
            else {
                console.log("Error using movie-this: " + error);
                    return;
        }


//Function spotify-this-song setup
    function spotifyThisSong() {
        var songName = process.argv[3];
        
        if (!songName) {
            songName = "The Sign";
            }
        
        spotify.search({type: 'track', query: songName}, function(err,data) 
        {
            if (error) {
                console.log ("Error using spotify-this-song");
                return;
        }

            else{
                console.log("Artist: " + data.tracks.items[0].artists[0].name);
                console.log("Song: " + data.tracks.items[0].name);
                console.log("Preview Link: " + data.tracks.items[0].preview_url);
                console.log("Album: " + data.tracks.items[0].album.name);
        }

//Function do-what-it-says setup
    function doWhatItSays() {
        fs.readFile("random.txt", "utf8", function(error, data){
            if (!error) {
                doWhatItSaysResults = data.split(",");
                spotifyThisSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
                } 
            else {
                console.log("Error using do-what-it-says" + error);
                }
    })
}
})

}
})
}
