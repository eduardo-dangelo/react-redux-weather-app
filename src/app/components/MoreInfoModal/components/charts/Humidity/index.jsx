import React, { Component } from 'react'
import { Line, Doughnut  } from 'react-chartjs-2'
import { fill } from "lodash"

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

    const filter1 = fill(label, '', 0, 40)
    const filter2 = fill(filter1, 'Now', 0, 1)
    const filter3 = fill(filter2, '24h', 8, 9)
    const filter4 = fill(filter3, '48h', 16, 17)
    const filter5 = fill(filter4, '72h', 24, 25)
    const filter6 = fill(filter5, '96h', 32, 33)

    const chartData = {
      labels: label,
      datasets: [
        {
          label: 'Humidity',
          backgroundColor: ['rgba(139, 139, 242,0.2)', 'rgba(39, 39, 142, 0.05)'],
          borderColor: 'rgba(139, 139, 242, 1)',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(139, 139, 242,0.4)',
          hoverBorderColor: 'rgba(139, 139, 242,1)',
          pointHoverBackgroundColor: 'rgba(139, 139, 242,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          data: [ humidity[0], (100 - humidity[0]) ]
        }
      ]
    };


    const options = {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return (tooltipItem.yLabel);
          }
        }
      },
      maintainAspectRatio: false,
    }

    return (
      <div>
        <Doughnut
          // width={100}
          height={180}
          options={options}
          data={chartData}
        />
      </div>
    )
  }
}

export default HumidityChart