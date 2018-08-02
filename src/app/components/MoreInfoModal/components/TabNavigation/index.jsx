import React from 'react'
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import FaEllipsis from 'react-icons/lib/fa/ellipsis-h'

class TabNavigation extends React.Component {
  handleViewCard = () => {
    const { actions } = this.props
    actions.changeDisplayMode('card')
  }

  render() {
    const { weather, onSelect, showDropdown } = this.props
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
              {showDropdown && isCityActive && (
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
                        onClick={this.handleViewCard}
                      >
                        View Card
                        {/*<FaChart/>*/}
                      </MenuItem>
                    </DropdownButton>
                  </ButtonToolbar>
                </div>
              )}
            </a>
          )
        })}
      </div>
    )
  }
}

export default TabNavigation