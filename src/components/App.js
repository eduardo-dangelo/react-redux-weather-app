import React, { Component } from 'react';
import './App.scss';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Weather App</h1>
          <h2>Select a Country and Search For a City</h2>
          <SearchBar />
        </header>
        <WeatherList />
      </div>
    );
  }
}

export default App;
