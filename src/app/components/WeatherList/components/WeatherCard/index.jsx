import React, { Component } from 'react'; 
import WeekDayInfo from './components/WeekDayInfo/index';
import MainInfo from './components/MainInfo/index';
import './style.scss';

class WeatherList extends Component {
  handleCardClick = (data) => () => {
    console.log('data', data);
  }

  render() {
    const { cityData } = this.props;
    const name = cityData.city.name;
    const country = cityData.city.country;

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
    ];

    const dayIndex = new Date().getDay();
    const day = dayNames[dayIndex];

    const weekDayList = [
      {index: 1, dayNumber: 7},
      {index: 2, dayNumber: 15},
      {index: 3, dayNumber: 23},
      {index: 4, dayNumber: 31},
      {index: 5, dayNumber: 39},
    ];
    
    return (
      <div className="weather-card-container"  onClick={this.handleCardClick(cityData)}>
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
            {weekDayList.map((week, key) => {
              return (
                <WeekDayInfo
                  key={key}
                  day={dayNames[dayIndex + week.index]}
                  icon={cityData ? cityData.list[week.dayNumber].weather[0].icon : '-'}
                  desc={cityData ? cityData.list[week.dayNumber].weather[0].description : '-'}
                  tempMax={cityData ? cityData.list[week.dayNumber].main.temp_max : '-'}
                />
              );
            })}   
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherList;