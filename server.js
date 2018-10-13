const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const secrets = require('./secrets');
const { fetchTrendingTopics, tweetSearch } = require('./twitter-fetch')
const { fetchGoogleResults } = require('./google-fetch');
const fetchBingResults = require('./bing-fetch')

let allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

app.use(bodyParser.json());
app.use(allowCORS);
app.get('/trends', fetchTrendingTopics)
app.get('/google/:searchTerm', fetchGoogleResults)
app.get('/bing/:searchTerm', fetchBingResults)
app.get('/twitter/:searchTerm', tweetSearch)

app.listen(5000);