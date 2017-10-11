import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import './WeatherList.scss';

class WeatherList extends Component {
  renderWeather(cityData, key) {
    return (
      <WeatherCard cityData={cityData} key={key} />
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