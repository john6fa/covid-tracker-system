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
        </select>
      </div>


      <LineGraph />
    </div >
  )
}

export default App