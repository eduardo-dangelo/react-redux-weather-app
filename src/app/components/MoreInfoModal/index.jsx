import React from 'react'
import { connect } from'react-redux'
import { actions } from '../../reducer'
import { Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import WindChart from './components/charts/Wind'
import TempChart from './components/charts/Temp'
import HumidityChart from './components/charts/Humidity'
import { get, map } from 'lodash'
import './style.scss'
import MainInfo from "../WeatherList/components/WeatherCard/components/MainInfo";
import WeekDayInfo from "../WeatherList/components/WeatherCard/components/WeekDayInfo";
import TabNavigation from './components/TabNavigation'
import Map from './components/Map'


class MoreInfoModal extends React.Component {
  state = {
    showDropdown: false,
  }

  handleSelectCity = (city) => () => {
    const { actions } = this.props

    actions.selectCity(city)
  }

  handleCardMouseHover = () => {
    this.setState({
      showDropdown: true
    })
  }

  handleCardMouseLeave = () => {
    this.setState({
      showDropdown: false
    })
  }

  render() {
    const { weather, actions } = this.props
    const { showDropdown } = this.state
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
        <div className="container">
          <div
            className="more-info-modal animated fadeIn"
            onMouseOver={this.handleCardMouseHover}
            onMouseLeave={this.handleCardMouseLeave}
          >
            <TabNavigation
              onSelect={this.handleSelectCity}
              weather={weather}
              showDropdown={showDropdown}
              actions={actions}
            />
            <div className={`modal-hero hero-bg-${item.list[0].weather[0].icon}`}>
              <MainInfo
                type="horizontal"
                name={item.city.name}
                country={item.city.country}
                day={day}
                temp={get(item, 'list[0].main.temp')}
                desc={get(item, 'list[0].weather[0].description')}
                min={get(item, 'list[0].main.temp_min')}
                max={get(item, 'list[0].main.temp_max')}
                wind={get(item, 'list[0].wind.speed')}
              />
            </div>
            <Row>
              <Col sm={9}>
                <div className="chart-container">
                  <TempChart data={item.list}/>
                  <div className="week-stats">
                    {map(weekDayList, (week, key) => {
                      return (
                        <WeekDayInfo
                          key={key}
                          day={dayNames[dayIndex + week.index]}
                          icon={get(item, `list[${week.dayNumber}].weather[0].icon`)}
                          desc={get(item, `list[${week.dayNumber}].weather[0].description`)}
                          tempMax={get(item, `list[${week.dayNumber}].main.temp_max`)}
                        />
                      )
                    })}
                  </div>
                </div>
              </Col>
              <Col sm={3}>
                <Row>
                  {/*<Col sm={12}>*/}
                    {/*<div className="chart-container">*/}
                      {/*<div className="chart-header">*/}
                        {/*<h5><img src={require('./img/wind.svg')} alt="wind" /> Wind</h5>*/}
                        {/*<span>*/}
                          {/*{Math.round(item.list[0].wind.speed * 3.6)} kmh*/}
                        {/*</span>*/}
                      {/*</div>*/}
                      {/*<WindChart data={item.list}/>*/}
                    {/*</div>*/}
                  {/*</Col>*/}
                  <Col sm={12}>
                    <div className="chart-container">
                      <div className="chart-wrapper">
                        <HumidityChart data={item.list} />
                        <div className="chart-header">
                          <h5>Humidity</h5>
                          <span>
                            {Math.round(item.list[0].main.humidity)} %
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/*<Col sm={12}>*/}
                {/*<TempChart data={item.list}/>*/}
              {/*</Col>*/}
              {/*<Col sm={12}>*/}
                {/*<Map data={item}/>*/}
              {/*</Col>*/}
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
