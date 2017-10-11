import React, { Component } from 'react';
import './style.scss';

export default class WeekDayInfo extends Component {
  render() {
    return (
      <div className="week-day-info">
        <div className="week-day">
          {this.props.day}
        </div>
        <div className="day-description">
          {this.props.desc}
        </div>
        <div className="day-temp">
          {Math.round(this.props.tempMax)}  &#8451;
        </div>
      </div>
    );
  }
}