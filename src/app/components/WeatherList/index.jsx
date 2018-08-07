import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherCard from './components/WeatherCard'
import SearchBar from '../SearchBar'

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
    const noCitySearched = weather.city.length === 0
    const hasSelectedCity = weather.selectedCity.city

    return (
      <div className={`internal-page `}>
        {noCitySearched ? (
          <div className="intro-message animated fadeIn">
            <img src={require('./img/weather-icon.png')} alt="icon"/>
            {/*<h1>The Weather App</h1>*/}
            {/*<SearchBar/>*/}
            <h1>Search for any city and receive weather information</h1>
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