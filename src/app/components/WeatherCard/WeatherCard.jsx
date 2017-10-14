import React, { Component } from 'react'; 
import Chart from './components/Chart/Chart';
import WeekDayInfo from './components/WeekDayInfo/WeekDayInfo';
import MainInfo from './components/MainInfo/MainInfo';
import './style.scss';

class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.state = { flipCard: false };
  }

  flipSide = () => {
    this.setState({
      flipCard: true,
    })
  }

  flipBack = () => {
    this.setState({
      flipCard: false,
    })
  }

  render() {
    const { flipCard } = this.state;
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
    const temps = cityData.list.map(weather => weather.main.temp);
    const presurres = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const winds = cityData.list.map(weather => weather.wind.speed);

    const weekDayList = [
      {index: 1, dayNumber: 7},
      {index: 2, dayNumber: 15},
      {index: 3, dayNumber: 23},
      {index: 4, dayNumber: 31},
      {index: 5, dayNumber: 39},
    ];

    const chartList = [
      {name: temps, color: 'green'},
      {name: presurres, color: 'green'},
      {name: humidities, color: 'green'},
      {name: winds, color: 'green'},
    ];
    
    console.log(flipCard);
    return (
      <div className={flipCard ? 'weather-card-container back-side' : 'weather-card-container front-side'}>
        <div className={`card front bg-${cityData.list[0].weather[0].icon}`} onClick={this.flipSide}>        
          <MainInfo
            name={name}
            country={country}
            day={day}
            temp={cityData.list[0].main.temp}
            desc={cityData.list[0].weather[0].description}
            min={cityData.list[0].main.temp_min}
            max={cityData.list[0].main.temp_max}
            wind={cityData.list[0].wind.speed}
          />
          <div className="week">
            {weekDayList.map((week, key) => {
              return (
                <WeekDayInfo
                  key={key}
                  day={dayNames[dayIndex + week.index]}
                  icon={cityData.list[week.dayNumber].weather[0].icon}
                  desc={cityData.list[week.dayNumber].weather[0].description}
                  tempMax={cityData.list[week.dayNumber].main.temp_max}
                />
              );
            })}
          </div>
        </div>
        <div className="card verse" onClick={this.flipBack}>
          <div className="charts">
            {chartList.map((chart, key) => {
              return (
                <Chart
                  key={key}
                  data={chart.name}
                  color={chart.color}
                  unity="k"
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