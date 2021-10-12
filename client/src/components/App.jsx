import React, { useState, useEffect } from 'react';
import LineGraph from './LineGraph.jsx';
import CovidSummary from './CovidSummary.jsx';

// const axios = require('axios');
import axios from './axios.jsx';

function App() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(0);
  const [covidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState("");
  const [covidCasesYAxis, setCovidCasesYAxis] = useState([]);
  const [covidDatesXAxis, setCovidDatesXAxis] = useState([]);


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
  }, [])

  if (loading) {
    return <p>Loading data from the API</p>;
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

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={country}
      />
      <div>
        <select value={country} onChange={countryHandler}>
          {countries}
        </select>
        <select value={days} onChange={daysHandler}>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>
      <LineGraph
        yAxis={covidCasesYAxis}
        xAxis={covidDatesXAxis}
      />
    </div >
  )
}

export default App