// require('dotenv').config()
// const {TwitterClient} = require('twitter-api-client')
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const request = require('request');

// const TwitterApp = new TwitterClient({
//     apiKey: process.env.TWITTER_API_KEY,
//     apiSecret: process.env.TWITTER_API_SECRET,
//     accessToken: process.env.TWITTER_ACCESS_TOKEN,
//     accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// })

var requestSettings = {
    method: 'GET',
    url: 'https://data.centrevaldeloire.fr/api/v2/catalog/datasets/agglobus-offre-theorique-mobilite-reseau-urbain-de-bourges/files/07b1b166df5e5f866ad75589b3824978',
    encoding: null
};

request(requestSettings, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
        feed.entity.forEach(function(entity) {
        if (entity.trip_update) {
            console.log(entity.trip_update);
        }
        console.log(entity.tripUpdate.stopTimeUpdate)
      });
    }
    //console.log(response.statusCode)
});