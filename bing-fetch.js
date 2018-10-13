const { BING_KEY_1, BING_KEY_2, BING_URL } = require('./secrets');
const fetch = require('node-fetch')

let fetchBingResults = (req, res) => {
  let searchQuery = req.params.searchTerm;
  fetch(BING_URL + searchQuery, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Ocp-Apim-Subscription-Key': BING_KEY_1
    }
  })
  .then(response => {
    return response.json()
  })
  .then(results => {
    res.send(results)
  })
  .catch(err =>
    res.send(err))
}

module.exports = { fetchBingResults }