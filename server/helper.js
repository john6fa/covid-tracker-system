const axios = require('axios');

const getSummary = (callback) => {
  axios.get(`https://api.covid19api.com/summary`)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      callback(error, null);
    })
}

const getCountryDataByDates = (params, query, callback) => {
  axios.get(`https://api.covid19api.com/country/${params}/status/confirmed?from=${query.from}T00:00:00Z&to=${query.to}T00:00:00Z`)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      callback(error, null);
    })
}

module.exports = {
  getSummary,
  getCountryDataByDates
}
