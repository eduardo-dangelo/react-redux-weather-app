import React, { Component } from 'react'
import './style.scss'

export default class MainInfo extends Component {
  render() {
    const { name, country, day, temp, desc, min, max, wind, type } = this.props
    const typeHorizontal = type === 'horizontal'

    return (
      <div className="main-info">
        <div className="main-info-title">
          {name}, {country}
        </div>
        <div className="main-info-date">
          {day}
        </div>
        <div className="main-info-temp">
          {Math.round(temp)}&#176;
        </div>
        {!typeHorizontal && (
          <div className="main-info-description">
            {desc}
          </div>
        )}
        {!typeHorizontal && (
          <div className="main-info-extra">
            <div className="main-info-temp-max">
              max - {Math.round(max)}&#176;
            </div>
            <div className="main-info-temp-min">
              min - {Math.round(min)}&#176;
            </div>
          </div>
        )}
        <div className="main-info-wind">
          <img src={require('./img/wind.svg')} alt="wind" />
          {Math.round(wind * 3.6)} kmh
        </div>
      </div>
    )
  }
}