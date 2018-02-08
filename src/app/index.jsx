import React, { Component } from 'react'
import './style.scss'
import SearchBar from './components/SearchBar'
import WeatherList from './components/WeatherList'
import MoreInfoModal from './components/MoreInfoModal'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    displayError: false,
  }

  componentWillReceiveProps(nextProps) {
    const { weather } = this.props

    if (weather.lastRequest !== nextProps.weather.lastRequest && !nextProps.weather.lastRequest) {
      this.setState({
        displayError: true,
      })

      setTimeout(() => {
        this.setState({
          displayError: false,
        })
      }, 3000)
    }
  }

  render() {
    const { displayError } = this.state
    return (
      <div className="App">
        <Helmet>
          <title>Weather App</title>
        </Helmet>
        <header className="App-header">
          <div className="search-bar">
            <SearchBar />
          </div>
        </header>
        {displayError && (
          <div className="error-container">
            <h4>404! city not found</h4>
          </div>
        )}
        <WeatherList />
        <MoreInfoModal/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    weather: state.weatherApp,
  }),
)(App)
