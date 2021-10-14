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
      res.status(200).send(data);
    }
  });
})



app.get('/api/news', (req, res) => {
  getNews()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

app.post('/api/news', (req, res) => {
  var { title, summary, source, published_at, url_site } = req.body;
  createNews(title, summary, source, published_at, url_site)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

app.delete('/api/news', (req, res) => {
  var { id } = req.body;
  removeNews(id)
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})


app.put('/api/news', (req, res) => {
  var { id, title, summary, source, published_at, url_site } = req.body;
  updateNews(id, title, summary, source, published_at, url_site)
    .then((results) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

app.listen(PORT, () => {
  console.log(`Server listening at local host: ${PORT}.`);
})