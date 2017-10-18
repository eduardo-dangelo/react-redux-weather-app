import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import './style.scss';

class WeatherList extends Component {
  renderWeather(cityData, key) {
    return (
      <WeatherCard cityData={cityData} key={key} />
    );
  }

  render() {
    const { weather } = this.props;
    console.log(weather.length);
    const initialState = weather.length === 0;
    return (
      <div className="internal-page">
        {initialState ? ( 
          <div className="intro-message">
            <h1>The Weather App</h1>
            <h1>Select a country and search for a city to receive weather information</h1>
            <img src={require('./img/weather-icon.png')} />
          </div>
        ) : (
          <div>
            {weather.map(this.renderWeather)}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);