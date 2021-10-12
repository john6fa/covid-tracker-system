import React from 'react'
import Card from './Card.jsx'

const CovidSummary = (props) => {

  const { totalConfirmed, totalRecovered, totalDeaths, country } = props;

  return (
    <div>
      <div>
        <h1>{country === '' ? 'World Wide Covid-19 Report' : country}</h1>
      </div>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Card>
            <span>Total Confirmed</span> <br />
            <span>{totalConfirmed}</span>
          </Card>
          <Card>
            <span>Total Recovered</span> <br />
            <span>{totalRecovered}</span>
          </Card>
          <Card>
            <span>Total Death</span> <br />
            <span>{totalDeaths}</span>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CovidSummary
