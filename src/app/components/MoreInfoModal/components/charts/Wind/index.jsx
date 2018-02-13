import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { fill } from "lodash"

class WindChart extends Component {
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
    const filter2 = fill(filter1, 'Now', 0, 1)
    const filter3 = fill(filter2, '24h', 8, 9)
    const filter4 = fill(filter3, '48h', 16, 17)
    const filter5 = fill(filter4, '72h', 24, 25)
    const filter6 = fill(filter5, '96h', 32, 33)

    const datas = {
      labels: label,
      datasets: [
        {
          label: 'wind',
          fill: true,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: wind,
        },
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
        <Line
          width={100}
          height={100}
          options={options}
          data={datas}/>
      </div>
    )
  }
}

export default WindChart