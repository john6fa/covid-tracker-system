const axios = require('axios');

const getSummary = (callback) => {
  axios.get(`https://api.covid19api.com/summary`)
    .then((response) => {
      callback(null, response);
    })
    .catch((error) => {
      callback(error, null);
    })
}

module.exports = {
  getSummary
}
