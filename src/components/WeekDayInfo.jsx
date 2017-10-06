import React, { Component } from 'react';

export default class WeekDayInfo extends Component {
  render() {
    return (
      <div className="day-info">
        {this.props.day}
        <div className="day-description">
          {this.props.desc}
        </div>
        <div className="day-temp">
          {Math.round(this.props.temp)}  &#8451;
        </div>
      </div>
    );
  }
}