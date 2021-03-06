import React, { Component } from 'react'
import './style.scss'

export default class WeekDayInfo extends Component {
  render() {
    const { day, icon, tempMax, desc } = this.props;

    return (
      <div className="week-day-info">
        <div className="week-day">
          {day}
        </div>
        <div className="day-description">
          <div className="icon-container">
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='Icon depicting current weather.' />
          </div>
          <span>{desc}</span>
        </div>
        <div className="day-temp">
          {Math.round(tempMax)}&#176;
        </div>
      </div>
    )
  }
}