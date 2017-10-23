import React, { Component } from 'react';
import './App.scss';
import SearchBar from './containers/SearchBar/SearchBar';
import WeatherList from './containers/WeatherList/WeatherList';
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Weather App</title>
        </Helmet>
        <header className="App-header">
          <div className="search-bar">
            <SearchBar />
          </div>
        </header>
        <WeatherList />
      </div>
    );
  }
}

export default App;
