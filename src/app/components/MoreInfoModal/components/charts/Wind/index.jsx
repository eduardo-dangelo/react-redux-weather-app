import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

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

    const datas = {
      labels: label,
      datasets: [
        {
          label: 'wind',
          fill: true,
          lineTension: 0.2,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          pointBorderWidth: 1,
          pointRadius: 1,
          data: wind,
        },
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
          data={datas}/>
      </div>
    )
  }
}

export default WindChart