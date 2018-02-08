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
    console.log('item', item)

    if (weather.openModal && item) {
      return (
        <div>
          <div className="more-info-modal">
            <div className="modal-header">
              <h2>{item.city.name}, {item.city.country}</h2>
              <h3>Population: {item.city.population}</h3>
            </div>
            <Row>
              <Col sm={6}>
                <RadarChart data={item.list}/>
              </Col>
              <Col sm={6}>
                <LineChart data={item.list}/>
              </Col>
              <Col sm={6}/>
              <Col sm={6}>
                <BarChart data={item.list}/>
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
