console.log("Hello bot");
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
console.log(config);
var message = 'My favorite number is ' + Math.floor(Math.random() * 100);

post_tweet(message);

function post_tweet(msg){
    Twitter.post('statuses/update', { status: msg }, sent_tweet);
}

function sent_tweet(err, data, response){
    if (err) {
        console.log("Error: failed to send tweet");
        console.log(err);
    } else {
        console.log(data);
    }
}