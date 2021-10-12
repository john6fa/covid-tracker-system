import React from 'react'
import { Line } from "react-chartjs-2";

const LineGraph = (props) => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "First dataset",
        data: props.yAxis,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  return (
    <div style={{
      width: '1500px',
      height: '1500px',
      margin: '50px auto' // 50px all around, center
    }}>
      <Line data={data} />
    </div>
  )
}

export default LineGraph;
