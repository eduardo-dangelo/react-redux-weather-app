import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Header from './components/Header'
import WeatherCardList from './components/WeatherList'
import WeatherStatsList from './components/MoreInfoModal'
import DisplayModeSelector from './components/DisplayModeSelector'
import './style.scss'
import { bindActionCreators } from 'redux'
import { actions } from './reducer'

class App extends React.Component {
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
    const { displayError } = this.state
    const { weather } = this.props
    return (
      <div className="App">
        <Helmet>
          <title>Weather App</title>
        </Helmet>
        <Header weather={weather}/>
        {displayError && (
          <div className="error-container">
            <h4>404! city not found</h4>
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
