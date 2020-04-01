import React, { Component } from "react"
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Hoda 本次出資表（單位/萬）'],
  datasets: [
    {
      label: '資本額（220）',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [220, 0.1]
    },
    {
      label: '預計募資（120）',
      backgroundColor: 'rgba(255, 206, 86,0.2)',
      borderColor: 'rgba(255, 206, 86,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 206, 86,0.4)',
      hoverBorderColor: 'rgba(255, 206, 86,1)',
      data: [50, 0.1]
    },
    // {
    //   label: '資本額2',
    //   backgroundColor: 'rgba(255,99,132,0.2)',
    //   borderColor: 'rgba(255,99,132,1)',
    //   borderWidth: 1,
    //   hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //   hoverBorderColor: 'rgba(255,99,132,1)',
    //   data: [50, 59, 80, 81, 56, 55, 40]
    // },
  ]
};

class BarDemo extends Component {
  render() {
    return (
      <div style={{
        height: '30vh',
        flex: 1,
        width: '10%',
      }}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default BarDemo;