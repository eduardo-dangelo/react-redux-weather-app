import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherCard from './components/WeatherCard'
import './style.scss'

class WeatherList extends Component {
  renderWeather = (cityData, key) => {
    if (cityData) {
      return (
        <WeatherCard cityData={cityData} key={key}/>
      )
    }
  }

  render() {
    const { weather } = this.props
    const noCitySelected = weather.city.length === 0

    return (
      <div className="internal-page">
        {noCitySelected ? (
          <div className="intro-message">
            <h1>The Weather App</h1>
            <h1>Search for a city to receive weather information</h1>
            <img src={require('./img/weather-icon.png')} alt="icon"/>
          </div>
        ) : (
          <div className="weather-list">
            {weather.city.map(this.renderWeather)}
          </div>
        )}
        <div className="bottom-bar">
          <a
            href="http://github.com/eduardo-dangelo/react-redux-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('./img/github-logo.png')} alt="github" />
          </a>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    weather: state.weatherApp,
  }),
)(WeatherList)