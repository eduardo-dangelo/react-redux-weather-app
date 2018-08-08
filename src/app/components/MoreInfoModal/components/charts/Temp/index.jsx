import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { fill } from 'lodash'

class TempChart extends Component {
  render() {
    const { data } = this.props

    const label = []
    const temp = []
    const wind = []
    data.map((item, key) => {

      return (
        label.push(key),
        temp.push(item.main.temp),
        wind.push(item.wind.speed)
      )
    })

    const filter1 = fill(label, '', 0, 40)
    const filter2 = fill(filter1, '', 0, 1)
    const filter3 = fill(filter2, '24h', 8, 9)
    const filter4 = fill(filter3, '48h', 16, 17)
    const filter5 = fill(filter4, '72h', 24, 25)
    const filter6 = fill(filter5, '96h', 32, 33)


    const chartData = {
      labels: label,
      datasets: [
        {
          label: 'temp',
          fill: true,
          lineTension: 0.6,
          borderWidth: 3,
          backgroundColor: 'rgba(75,192,192,0.05)',
          borderColor: 'rgba(75,192,192,1)',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          data: temp,
        },
      ]
    };

    const options = {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            label: function(tooltipItem) {
                return (`  ${tooltipItem.yLabel} °`);
            }
          }
        },
      maintainAspectRatio: false,
    }

    return (
      <div>
        <Line
          width={100}
          height={140}
          data={chartData}
          options={options}
        />
      </div>
    )
  }
}

export default TempChart