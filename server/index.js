const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');

const bodyParser = require('body-parser');
const helper = require('./helper');

const { getNews, createNews, removeNews, updateNews } = require('../database/index');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// ROUTES
app.get('/summary', (req, res) => {
  helper.getSummary((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})


app.get('/country/:countrySlug/status/confirmed', (req, res) => {
  helper.getCountryDataByDates(req.params.countrySlug, req.query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log("success country data")
      res.status(200).send(data);
    }
  });
})


app.listen(PORT, () => {
  console.log(`Server listening at local host: ${PORT}.`);
})