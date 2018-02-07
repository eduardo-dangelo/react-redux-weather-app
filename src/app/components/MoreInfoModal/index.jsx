import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'
import RadarChart from './components/charts/Radar'
import LineChart from './components/charts/Line'
import BarChart from './components/charts/Bar'

class MoreInfoModal extends Component {
  handleCloseModal = () => {
    const { actions } = this.props
    actions.closeModal()
  }

  render() {
    const { weather } = this.props
    console.log('city', weather.selectedCity)
    const item = weather.selectedCity && weather.selectedCity

    if (weather.openModal && item) {
      return (
        <div>
          <div className="more-info-modal">
            <h1>{item.city.name}</h1>
            <h2>{item.city.country}</h2>
            <p>Population: {item.city.population}</p>
            <Row>
              <Col sm={6}>
                <RadarChart/>
              </Col>
              <Col sm={6}>
                <LineChart/>
              </Col>
              <Col sm={12}>
                <BarChart/>
              </Col>
            </Row>
          </div>
          <div className="modal-container" onClick={this.handleCloseModal}/>
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
