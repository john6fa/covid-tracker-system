import React from 'react'
import Card from './Card.jsx'
import NumberFormat from 'react-number-format';

const CovidSummary = (props) => {

  const { totalConfirmed, totalRecovered, totalDeaths, country } = props;

  return (
    <div>
      <div>
        <h1 style={{ textTransform: "capitalize" }}>{country === '' ? 'World Wide Covid-19 Report' : country + ' Covid-19 Report'}</h1>
      </div>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Card>
            <span>Total Confirmed</span> <br />
            <span>
              <NumberFormat value={totalConfirmed} displayType={'text'} thousandSeparator={true} />
            </span>
          </Card>
          <Card>
            <span>Total Recovered</span> <br />
            <span>
              <NumberFormat value={totalRecovered} displayType={'text'} thousandSeparator={true} />
            </span>
          </Card>
          <Card>
            <span>Total Death</span> <br />
            <span>
              <NumberFormat value={totalDeaths} displayType={'text'} thousandSeparator={true} />
            </span>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CovidSummary
