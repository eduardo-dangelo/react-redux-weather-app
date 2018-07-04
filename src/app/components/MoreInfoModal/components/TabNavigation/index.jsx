import React from 'react'

class TabNavigation extends React.Component {
  render() {
    const { weather, onSelect } = this.props
    let cityLenghtEqualOne = false

    if (weather.city.length === 1) {
      cityLenghtEqualOne = true
    }

    const onlyOneOpenTab = cityLenghtEqualOne ? 'only-child' : ''

    return (
      <div className={`modal-tabs ${onlyOneOpenTab}`}>
        {weather.city.map((weatherCity, key) => {
          const isCityActive = weather.activeCity.city.id === weatherCity.city.id ? 'active' : ''
          return (
            <a
              key={key}
              onClick={onSelect(weatherCity)}
              className={`${onlyOneOpenTab} ${isCityActive}`}
            >
              <span className="city-name">
                {weatherCity.city.name}, {weatherCity.city.country}
              </span>
            </a>
          )
        })}
      </div>
    )
  }
}

export default TabNavigation