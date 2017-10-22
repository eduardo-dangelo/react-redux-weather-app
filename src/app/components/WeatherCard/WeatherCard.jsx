import React, { Component } from 'react'; 
import Chart from './components/Chart/Chart';
import WeekDayInfo from './components/WeekDayInfo/WeekDayInfo';
import MainInfo from './components/MainInfo/MainInfo';
import './style.scss';

class WeatherList extends Component {
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
    const hours = cityData.list.map(weather => weather.dt_txt.substring(11, 13) + 'h');
    const key = cityData.list.map((weather, key) => key);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const winds = cityData.list.map(weather => weather.wind.speed);
    console.log('hours', hours);

    const weekDayList = [
      {index: 1, dayNumber: 7},
      {index: 2, dayNumber: 15},
      {index: 3, dayNumber: 23},
      {index: 4, dayNumber: 31},
      {index: 5, dayNumber: 39},
    ];

    const presurreData = {
      labels: hours,
      datasets: [
        {
          label: 'humidity - %',
          backgroundColor: 'rgba(50,20,202,0.2)',
          borderColor: 'rgba(50,20,202,1)',
          borderWidth: 1,
          pointRadius: 0,
          hoverBackgroundColor: 'rgba(50,20,202,0.4)',
          hoverBorderColor: 'rgba(50,20,202,1)',
          data: humidities
        }
      ]
    };

    const tempsData = {
      labels: hours,
      datasets: [
        {
          label: 'temp - celsius',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          pointRadius: 0,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: temps
        }
      ]
    };

    const windData = {
      labels: hours,
      datasets: [
        {
          label: 'wind - kmh',
          backgroundColor: 'rgba(62,62,62,0.2)',
          borderColor: 'rgba(62,62,62,1)',
          borderWidth: 1,
          pointRadius: 0,
          hoverBackgroundColor: 'rgba(62,62,62,0.4)',
          hoverBorderColor: 'rgba(62,62,62,1)',
          data: winds
        }
      ]
    };

    const options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    };

    const chartList = [
      {name: tempsData, color: 'green'},
      {name: presurreData, color: 'green'},
      {name: windData, color: 'green'},
    ];

    
    console.log(flipCard);
    return (
      <div className="weather-card-container front-side">
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
      </div>
    );
  }
}

export default WeatherList;