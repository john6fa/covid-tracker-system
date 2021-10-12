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
  }

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={''}
      />
      <div>
        <select>
          {countries}
        </select>
        <select>
          <option value="7">Last 7 Days</option>
          <option value="30">>Last 30 Days</option>
          <option value="90">>Last 90 Days</option>
        </select>
      </div>
      <LineGraph />
    </div >
  )
}

export default App