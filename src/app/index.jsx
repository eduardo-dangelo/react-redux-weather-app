import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Header from './components/Header'
import WeatherCardList from './components/WeatherList'
import WeatherStatsList from './components/MoreInfoModal'

import './style.scss'
import { bindActionCreators } from 'redux'
import { actions } from './reducer'

class App extends React.Component {
  renderWeatherList = () => {
    const { weather } = this.props

    if (weather.displayMode === 'card' ) {
      return <WeatherCardList />
    }

    if (weather.displayMode === 'stats' ) {
      return <WeatherStatsList/>
    }
  }

  render() {
    const { weather } = this.props
    return (
      <div className="App">
        <Helmet>
          <title>Weather App</title>
        </Helmet>
        <Header weather={weather}/>
        {weather.hasError && (
          <div className="error-container">
            <h4>Ops! This city could not be found. :(</h4>
          </div>
        )}
        {this.renderWeatherList()}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    weather: state.weatherApp,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(App)
