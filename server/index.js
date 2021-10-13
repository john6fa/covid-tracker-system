const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// ROUTES
app.get('/summary')




app.listen(PORT, () => {
  console.log(`Server listening at local host: ${PORT}.`);
})