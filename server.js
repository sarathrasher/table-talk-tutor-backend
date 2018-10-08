const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const secrets = require('./secrets');
const { fetchTrendingTopics } = require('./twitter-fetch')
const { fetchGoogleResults } = require('./google-fetch');

let allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

app.use(bodyParser.json());
app.use(allowCORS);
app.get('/trends', fetchTrendingTopics)
app.get('/search/:searchTerm', fetchGoogleResults)

app.listen(5000);