import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class BarChart extends Component {
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
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: humidity
        }
      ]
    };

    return (
      <div>
        <Line
          width={100}
          height={150}
          options={{
            maintainAspectRatio: false
          }}
          data={datas}
        />
      </div>
    )
  }
}

export default BarChart