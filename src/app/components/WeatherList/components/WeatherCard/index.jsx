import React, { Component } from 'react'
import WeekDayInfo from './components/WeekDayInfo/index'
import MainInfo from './components/MainInfo/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../reducer'
import './style.scss';
import { map } from 'lodash'
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import FaEllipsis from 'react-icons/lib/fa/ellipsis-h'
import FaChart from "react-icons/lib/fa/bar-chart";

class WeatherList extends Component {
  state = {
    showDropdown: false,
  }

  handleViewStats = (data) => () => {
    const { actions } = this.props
    console.log('data', data)

    actions.selectCity(data)
    actions.changeDisplayMode('stats')
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
    const { cityData } = this.props
    const { showDropdown } = this.state
    const name = cityData.city.name
    const country = cityData.city.country

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
    
    return (
      <div>
        <div
          className="weather-card-container animated fadeIn"
          onMouseOver={this.handleCardMouseHover}
          onMouseLeave={this.handleCardMouseLeave}
        >
          {showDropdown && (
            <div className="dropdown-container animated bounceIn">
              <ButtonToolbar>
                <DropdownButton
                  bsStyle="default"
                  title={<FaEllipsis/>}
                  noCaret
                  pullRight
                  id="dropdown-no-caret"
                >
                  <MenuItem
                    eventKey="1"
                    onClick={this.handleViewStats(cityData)}
                  >
                    View Stats
                    <FaChart/>
                  </MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            </div>
          )}
          <div className={`card bg-${cityData.list[0].weather[0].icon ? cityData.list[0].weather[0].icon : ''}`}>
            <MainInfo
              name={name}
              country={country}
              day={day}
              temp={cityData ? cityData.list[0].main.temp : '-'}
              desc={cityData ? cityData.list[0].weather[0].description : '-'}
              min={cityData ? cityData.list[0].main.temp_min : '-'}
              max={cityData ? cityData.list[0].main.temp_max : '-'}
              wind={cityData ? cityData.list[0].wind.speed : '-'}
            />
            <div className="week">
              {/*{map(weekDayList, (week, key) => {*/}
                {/*return (*/}
                  {/*<WeekDayInfo*/}
                    {/*key={key}*/}
                    {/*day={dayNames[dayIndex + week.index]}*/}
                    {/*icon={cityData ? cityData.list[week.dayNumber].weather[0].icon : '-'}*/}
                    {/*desc={cityData ? cityData.list[week.dayNumber].weather[0].description : '-'}*/}
                    {/*tempMax={cityData ? cityData.list[week.dayNumber].main.temp_max : '-'}*/}
                  {/*/>*/}
                {/*)*/}
              {/*})}*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(WeatherList)