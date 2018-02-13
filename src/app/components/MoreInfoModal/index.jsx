import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'
import WindChart from './components/charts/Wind'
import TempChart from './components/charts/Temp'
import HumidityChart from './components/charts/Humidity'
import moment from 'moment'

class MoreInfoModal extends Component {
  state = {
    activeChart: 'temp',
  }

  handleCloseModal = () => {
    const { actions } = this.props
    actions.closeModal()
  }

  handleChangeActiveChart = (value) => () => {
    this.setState({
      activeChart: value,
    })
  }

  render() {
    const { weather } = this.props
    const { activeChart } = this.state
    console.log('activeChart', activeChart)
    console.log('city', weather.selectedCity)
    const item = weather.selectedCity && weather.selectedCity
    console.log('item', item)

    if (weather.openModal && item) {
      return (
        <div className="modal-container" onClick={this.handleCloseModal}>
          <div className="more-info-modal">
            <div className="modal-header">
              <div className="title">
                <h2>{item.city.name}, {item.city.country}</h2>
                <span>Population: {item.city.population}</span>
              </div>
              <div className="date-and-time">
                <h3>{moment().format('dddd')} - {moment().format("MMM Do YY")}</h3>
                <span>{moment().format('L')}</span>
              </div>
            </div>
            <Row>
              <Col sm={12}>
                <div className="chart-container">
                  <div className="chart-header">
                    <h5>Temperature</h5>
                    <span>
                      {Math.round(item.list[0].main.temp)}&#176;
                    </span>
                  </div>
                  <TempChart data={item.list} activeChart={activeChart}/>
                </div>
                <div className="chart-container">
                  <div className="chart-header">
                    <h5>Wind</h5>
                    <span>
                      {Math.round(item.list[0].wind.speed * 3.6)} kmh
                    </span>
                  </div>
                  <WindChart data={item.list} activeChart={activeChart}/>
                </div>
                <div className="chart-container">
                  <div className="chart-header">
                    <h5>Humidity</h5>
                    <span>
                      {Math.round(item.list[0].main.humidity)} %
                    </span>
                  </div>
                  <HumidityChart data={item.list} activeChart={activeChart}/>
                </div>
                <div className="credits">
                  <a href="https://openweathermap.org/" rel="noopener noreferrer" target="_blank">
                    source: openweathermap.org
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )
    }
    return null
  }
}

export default connect(
  (state) => ({
    weather: state.weatherApp,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(MoreInfoModal)
