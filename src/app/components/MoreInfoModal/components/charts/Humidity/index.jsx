import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class HumidityChart extends Component {
  render() {
    const { data } = this.props

    const label = []
    const humidity = []
    data.map((item, key) => {
      return (
        label.push(key),
        humidity.push(item.main.humidity)
      )
    })

    const datas = {
      labels: label,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: humidity
        }
      ]
    };

    return (
      <div>
        <Line
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
          }}
          data={datas}
        />
      </div>
    )
  }
}

export default HumidityChart