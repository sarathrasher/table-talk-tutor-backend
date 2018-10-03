const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const secrets = require('./secrets');
const { fetchTrendingTopics } = require('./twitter-fetch')
{/* <script>
  (function() {
    var cx = '012027295086400924518:nkmgfk4hjww';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:searchresults-only></gcse:searchresults-only> */}

let allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

app.use(bodyParser.json());
app.use(allowCORS);
app.get('/trends', fetchTrendingTopics)

app.listen(5000);