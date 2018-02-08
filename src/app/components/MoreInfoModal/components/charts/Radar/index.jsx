import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2'

class RadarChart extends Component {
  render() {
    const { data } = this.props
    const datas = {
      labels: ['Humidity', 'Pressure', 'Temp', 'Wind', 'tet'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 60]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 12]
        }
      ]
    }

    return (
      <div>
        <Radar data={datas}/>
      </div>
    )
  }
}

export default RadarChart