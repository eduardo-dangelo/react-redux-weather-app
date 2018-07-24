import React from 'react'
import { connect } from'react-redux'
import { actions } from '../../reducer'
import { Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import WindChart from './components/charts/Wind'
import TempChart from './components/charts/Temp'
import HumidityChart from './components/charts/Humidity'
import { get } from 'lodash'
import './style.scss'
import MainInfo from "../WeatherList/components/WeatherCard/components/MainInfo";
import WeekDayInfo from "../WeatherList/components/WeatherCard/components/WeekDayInfo";
import TabNavigation from './components/TabNavigation'

class MoreInfoModal extends React.Component {
  handleSelectCity = (city) => () => {
    const { actions } = this.props

    actions.selectCity(city)
  }

  render() {
    const { weather } = this.props
    const item = get(weather, 'activeCity')
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ]

    const dayIndex = new Date().getDay()
    const day = dayNames[dayIndex]

    const weekDayList = [
      {index: 1, dayNumber: 7},
      {index: 2, dayNumber: 15},
      {index: 3, dayNumber: 23},
      {index: 4, dayNumber: 31},
      {index: 5, dayNumber: 39},
    ]

    if (item) {
      return (
        <div className="modal-container">
          <div className="more-info-modal">
            <TabNavigation
              onSelect={this.handleSelectCity}
              weather={weather}
            />
            <div className={`modal-hero hero-bg-${item.list[0].weather[0].icon}`}/>
            <Row>
              <Col sm={6}>
                <div className="chart-container">
                  <MainInfo
                    name={item.city.name}
                    country={item.city.country}
                    day={day}
                    temp={item ? item.list[0].main.temp : '-'}
                    desc={item ? item.list[0].weather[0].description : '-'}
                    min={item ? item.list[0].main.temp_min : '-'}
                    max={item ? item.list[0].main.temp_max : '-'}
                    wind={item ? item.list[0].wind.speed : '-'}
                  />
                  <TempChart data={item.list}/>
                  <div className="week">
                    {weekDayList.map((week, key) => {
                      return (
                        <WeekDayInfo
                          key={key}
                          day={dayNames[dayIndex + week.index]}
                          icon={item ? item.list[week.dayNumber].weather[0].icon : '-'}
                          desc={item ? item.list[week.dayNumber].weather[0].description : '-'}
                          tempMax={item ? item.list[week.dayNumber].main.temp_max : '-'}
                        />
                      )
                    })}
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col sm={12}>
                    <div className="chart-container">
                      <div className="chart-header">
                        <h5><img src={require('./img/wind.svg')} alt="wind" /> Wind</h5>
                        <span>
                      {Math.round(item.list[0].wind.speed * 3.6)} kmh
                    </span>
                      </div>
                      <WindChart data={item.list}/>
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div className="chart-container">
                      <div className="chart-header">
                        <h5>Humidity</h5>
                        <span>
                      {Math.round(item.list[0].main.humidity)} %
                    </span>
                      </div>
                      <HumidityChart data={item.list} />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={12}>
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
