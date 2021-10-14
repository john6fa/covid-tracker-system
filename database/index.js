const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'covidDB'
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to MySQL');
  }
})

const queryPromise = util.promisify(connection.query).bind(connection);

const getNews = () => {
  return queryPromise('SELECT * from covid')
    .then((result) => {
      console.log('Success with GET request');
      return result;
    })
    .catch((error) => {
      console.log(error);
    })
}

const createNews = (title, summary, source, published_at, url_site) => {
  return queryPromise('INSERT INTO covid (title, summary, source, published_at, url_site) VALUES (?, ?, ?, ?)', [title, summary, source, published_at, url_site])
    .then(() => {
      console.log('Success with POST request');
    })
    .catch((error) => {
      console.log(error);
    })
}

const removeNews = (id) => {
  return queryPromise('DELETE FROM covid WHERE id = ?', [id])
    .then(() => {
      console.log('Success with DELETE request');
    })
    .catch((error) => {
      console.log(error);
    })
}

const updateNews = (id, title, summary, source, published_at, url_site) => {
  return queryPromise('UPDATE grocery SET title = ?, summary = ?, source = ?, published_at = ?, url_site = ? WHERE id = ?',
    [id, title, summary, source, published_at, url_site])
    .then(() => {
      console.log('Success with PUT request');
    })
    .catch((error) => {
      console.log(error);
    })
}

module.exports = {
  getNews,
  createNews,
  removeNews,
  updateNews
}