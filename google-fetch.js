const { GOOGLE_API_URL } = require('./secrets.js');
const fetch = require('node-fetch');

const fetchGoogleResults = (req, res) => {
  let searchQuery = req.params.searchTerm;
  fetch(GOOGLE_API_URL + searchQuery, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(response => {
    return response.json()
  })
  .then(results => {
    return res.send(results)
  })
  .catch(err =>
    res.send(err))
}

module.exports = { fetchGoogleResults };
