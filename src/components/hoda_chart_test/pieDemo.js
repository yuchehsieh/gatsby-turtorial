import React, { Component } from "react";
import {Pie} from 'react-chartjs-2';

const data = {
  labels: [
    'Hoda 自家佔股（70%）',
    '本次招募占比（10%）',
    'Google 所持股份（20%）'
  ],
  datasets: [{
    data: [70, 20, 10],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class PieDemo extends Component {
  render() {
    return (
      <div style={{
        flex: 1,
        // height: '30',
      }}>
        <Pie data={data}/>
      </div>
    )
  }
}

export default PieDemo