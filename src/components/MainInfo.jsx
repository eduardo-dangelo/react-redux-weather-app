import React, { Component } from 'react';

export default class MainInfo extends Component {
  render() {
    const { name, country, day, temp, desc, min, max, wind } = this.props;
    const hour = new Date().getHours() + 'h';

    return (
      <div>
        <div className="title">
          {name}, {country}
        </div>
        <div className="main-info">
          <div className="main-date">
            {day}
          </div>
          <div className="main-hour">
            {hour}
          </div>
          <div className="main-temp">
            {Math.round(temp)}  &#8451;
          </div>
          <div className="main-description">
            {desc}
          </div>
          <div className="main-temp-min">
            {Math.round(min)}  &#8451;
          </div>
          <div className="main-temp-max">
            {Math.round(max)}  &#8451;
          </div>
          <div className="main-temp-max">
            {Math.round(wind * 3.6)} kmh
          </div>
        </div>
      </div>
    );
  }
}