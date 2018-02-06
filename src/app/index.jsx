import React, { Component } from 'react'
import './style.scss'
import SearchBar from './components/SearchBar'
import WeatherList from './components/WeatherList'
import MoreInfoModal from './components/MoreInfoModal'
import { Helmet } from "react-helmet"

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
        <MoreInfoModal/>
      </div>
    );
  }
}

export default App
