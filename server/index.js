const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
const data = require('./helper');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// ROUTES
app.get('/summary', (req, res) => {
  data.getSummary((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})


app.listen(PORT, () => {
  console.log(`Server listening at local host: ${PORT}.`);
})