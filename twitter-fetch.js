const { TWITTER_API_KEY, TWITTER_API_SECRET_KEY, TWITTER_URL, TWITTER_ACCESS_TOKEN_SECRET, TWITTER_ACCESS_TOKEN } = require('./secrets');

const nonce = require('nonce-str');
const Twitter = require('twitter');


const client = new Twitter({
  consumer_key: TWITTER_API_KEY,
  consumer_secret: TWITTER_API_SECRET_KEY,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

let fetchTrendingTopics = (req, res) =>
  client.get(TWITTER_URL, (err, response) => {
    err ? console.log(err) :
    res.send(response)
  })

module.exports = {fetchTrendingTopics}