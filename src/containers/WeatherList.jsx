import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import './WeatherList.scss';

class WeatherList extends Component {
    renderWeather(cityData, key) {
    const name = cityData.city.name;
    const country = cityData.city.country;
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ];
    const dayIndex = new Date().getDay();
    const hour = new Date().getHours() + 'h';
    
    const temps = cityData.list.map(weather => weather.main.temp);
    const presurres = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const winds = cityData.list.map(weather => weather.wind.speed);
    console.log('info', cityData);


    return (
      <div className="weather-item-container" key={key}>
        <div className="title">
          {name}, {country}
        </div>
        <div className="main-info">
          <div className="main-date">
            {dayNames[dayIndex]}
          </div>
          <div className="main-hour">
            {hour}
          </div>
          <div className="main-temp">
            {Math.round(cityData.list[0].main.temp)}  &#8451;
          </div>
          <div className="main-description">
            {cityData.list[0].weather[0].description}
          </div>
          <div className="main-temp-min">
            {Math.round(cityData.list[0].main.temp_min)}  &#8451;
          </div>
          <div className="main-temp-max">
            {Math.round(cityData.list[0].main.temp_max)}  &#8451;
          </div>
          <div className="main-temp-max">
            {Math.round(cityData.list[0].wind.speed * 3.6)} kmh
          </div>
        </div>
        <div className="week">
          <div className="day-info">
            {dayNames[dayIndex + 1]}
            <div className="temp-min">
              {cityData.list[7].weather[0].description}
            </div>
            <div className="temp-max">
              {Math.round(cityData.list[7].main.temp_max)}  &#8451;
            </div>
          </div>
          <div className="day-info">
            {dayNames[dayIndex + 2]}
            <div className="temp-min">
              {cityData.list[15].weather[0].description}
            </div>
            <div className="temp-max">
              {Math.round(cityData.list[15].main.temp_max)}  &#8451;
            </div>
          </div>
          <div className="day-info">
            {dayNames[dayIndex + 3]}
            <div className="temp-min">
              {cityData.list[23].weather[0].description}
            </div>
            <div className="temp-max">
              {Math.round(cityData.list[23].main.temp_max)}  &#8451;
            </div>
          </div>
          <div className="day-info">
            {dayNames[dayIndex + 4]}
            <div className="temp-min">
              {cityData.list[31].weather[0].description}
            </div>
            <div className="temp-max">
              {Math.round(cityData.list[31].main.temp_max)}  &#8451;
            </div>
          </div>
          <div className="day-info">
            {dayNames[dayIndex + 5]}
            <div className="temp-min">
              {cityData.list[39].weather[0].description}
            </div>
            <div className="temp-max">
              {Math.round(cityData.list[39].main.temp_max)}  &#8451;
            </div>
          </div>    
        </div>
        <div className="charts">
          <Chart data={temps} color="orange" unity="k" />
          <Chart data={presurres} color="red" unity="k" />
          <Chart data={humidities} color="blue" unity="k" />
          <Chart data={winds} color="green" unity="k" />
        </div>  
      </div>
    );
  }
  render() {
    return (
      <div className="internal-page">
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);