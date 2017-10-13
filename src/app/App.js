import React, { Component } from 'react';
import './App.scss';
import SearchBar from './containers/SearchBar/SearchBar';
import WeatherList from './containers/WeatherList/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <WeatherList />
      </div>
    );
  }
}

export default App;
