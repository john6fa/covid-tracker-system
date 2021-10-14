import React, { useState, useEffect } from 'react';
import LineGraph from './Graph/LineGraph.jsx';
import CovidSummary from './Graph/CovidSummary.jsx';

const axios = require('axios');
import axios3 from './Graph/axios.jsx';
import axios2 from './NewsCards/axios2.jsx';
import NewsCards from './NewsCards/NewsCards.jsx';
import Form from './Form/Form.jsx';

import Button from '@material-ui/core/Button';
import ModalDialog from './Form/ModalDialog.jsx';


function App() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState("");
  const [covidCasesYAxis, setCovidCasesYAxis] = useState([]);
  const [covidDatesXAxis, setCovidDatesXAxis] = useState([]);

  const [newsArticles, setNewsArticles] = useState([]);

  const [newsArticlesDB, setNewsArticlesDB] = useState([]);

  const [open, setOpen] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios.get('/summary')
      .then((res) => {
        console.log(res);
        setLoading(false);

        if (res.status === 200) {
          setTotalConfirmed(res['data']['Global']['TotalConfirmed']);
          setTotalRecovered(res['data']['Global']['TotalRecovered']);
          setTotalDeaths(res['data']['Global']['TotalDeaths']);
          setCovidSummary(res.data);
        }

      })
      .catch((err) => {
        console.log(err);
      })


    axios2.get('/v2/everything?q=covid&apiKey=add8985f6ac24c4d9a5969b4d2242f10')
      .then((res) => {
        console.log(res);
        setNewsArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get('/api/news')
      .then((res) => {
        setNewsArticlesDB(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  if (loading) {
    return <p style={{ textTransform: "capitalize", fontSize: "30px" }}>Loading data from the API</p>;
  }

  const countries = [];
  if (covidSummary.Countries) {
    covidSummary.Countries.forEach((country, index) => {
      countries.push(<option value={country.Slug} key={index}>{country.Country}</option>)
    })
    countries.unshift(<option value={""} key={-1}>Select Country</option>)
  }

  const formatDate = (date) => {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const _date = d.getDate();

    return `${year}-${month}-${_date}`
  }

  // 2020-03-01
  const countryHandler = (e) => {
    setCountry(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - (days - 1)));

    getCountryDataByDates(e.target.value, to, from);
  }

  const daysHandler = (e) => {
    setDays(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - (e.target.value - 1)));

    getCountryDataByDates(country, to, from);
  }

  // https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
  // axios3.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)

  const getCountryDataByDates = (countrySlug, to, from) => {
    axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then((res) => {
        console.log(res);

        // const covidCases = [];
        // res.data.forEach((country, index) => {
        //   covidCases.push(country.Cases);
        // })
        const yAxisCovidCount = res.data.map((d) => d.Cases);
        const xAxisDates = res.data.map((d) => d.Date.substring(0, 10));
        const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug);

        setCovidCasesYAxis(yAxisCovidCount);
        setCovidDatesXAxis(xAxisDates);
        setTotalConfirmed(covidDetails['TotalConfirmed']);
        setTotalRecovered(covidDetails['TotalRecovered']);
        setTotalDeaths(covidDetails['TotalDeaths']);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // inside useEffect
  // const getNewsDatabase = () => {
  //   axios.get('/api/news')
  //     .then((res) => {
  //       setNewsArticlesDB(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // };

  const postNewsDatabase = (newsObj) => {
    axios.post('/api/news', newsObj)
      .then((response) => {
        // setNewsArticlesDB(newsArticlesDB.concat(newsObj));
        setNewsArticlesDB([...newsArticlesDB, newsObj]);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  // const putNewsDatabase = () {

  // };

  // const deleteNewsDatabase = () {

  // };


  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={country}
      />
      <div className="options">
        <select className="countries" value={country} onChange={countryHandler}>
          {countries}
        </select>
        <select className="days" value={days} onChange={daysHandler}>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>
      <LineGraph
        yAxis={covidCasesYAxis}
        xAxis={covidDatesXAxis}
      />
      <div className="news">
        <NewsCards articles={newsArticles} />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen} style={{
          backgroundColor: 'rgb(46, 138, 224)',
          color: '#FFFFFF',
          marginTop: '100px',
          marginBottom: '100px',
          fontSize: '30px'
        }}>
          Add News Article
        </Button>
        <ModalDialog open={open} handleClose={handleClose} />

        {/* <Form /> */}
      </div>
    </div >
  )
}

export default App

// news api: add8985f6ac24c4d9a5969b4d2242f10