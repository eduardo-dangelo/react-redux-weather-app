import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends Component {
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
          label: 'temp',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: temp,
        },
        // {
        //   label: 'wind',
        //   fill: true,
        //   lineTension: 0.1,
        //   backgroundColor: 'rgba(75,192,192,0.2)',
        //   borderColor: 'rgba(175,12,152,1)',
        //   borderCapStyle: 'butt',
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: 'miter',
        //   pointBorderColor: 'rgba(75,192,192,1)',
        //   pointBackgroundColor: '#fff',
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        //   pointHoverBorderColor: 'rgba(220,220,220,1)',
        //   pointHoverBorderWidth: 2,
        //   pointRadius: 1,
        //   pointHitRadius: 10,
        //   data: wind,
        // },
      ]
    };

    return (
      <div>
        <Line data={datas}/>
      </div>
    )
  }
}

export default LineChart