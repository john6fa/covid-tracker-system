import React from 'react'
import { Line } from "react-chartjs-2";

const LineGraph = (props) => {

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      fontColor: "#FFFFFF",
    },
    scales: {
      xAxes: [{
        ticks: {
          color: "#666",
        }
      }],
      yAxes: [{
        ticks: {
          color: "#666",
        }
      }]
    }
  };

  const data = {
    labels: props.xAxis,
    datasets: [
      {
        label: "COVID Cases",
        data: props.yAxis,
        fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        // borderColor: "rgba(75,192,192,1)"
        backgroundColor: "rgb(82, 97, 107, 0.3)",
        borderColor: "rgb(82, 97, 107, 1)"
      },
    ]
  };

  return (
    <div style={{
      width: '1500px',
      height: '1500px',
      margin: '50px auto' // 50px all around, center
    }}>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineGraph;
