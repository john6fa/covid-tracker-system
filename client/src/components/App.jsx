import React from 'react';
import LineGraph from './LineGraph.jsx';
import CovidSummary from './CovidSummary.jsx';

const axios = require('axios');

function App() {
  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={0}
        totalRecovered={0}
        totalDeaths={0}
        country={'USA'}
      />
      <LineGraph />
    </div >
  )
}

export default App