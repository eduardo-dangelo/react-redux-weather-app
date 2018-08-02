import React from 'react'
import SearchBar from '../SearchBar'
import { Col, Row } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    const { weather } = this.props

    // if (weather.city.length === 0) {
    //   return null
    // }

    return (
      <header className="App-header">
        <div className="container">
          <Row>
            <Col md={8}>
              <div className="header-logo">
                <img src={require('../WeatherList/img/weather-icon.png')} alt="icon"/>
                <h4>The Weather App</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="search-bar-container">
                <SearchBar />
              </div>
            </Col>
          </Row>
        </div>
        {/*<DisplayModeSelector/>*/}
      </header>
    )
  }
}

export default Header