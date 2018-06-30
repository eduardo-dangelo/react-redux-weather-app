import React from 'react'
import { connect } from 'react-redux'
import {actions} from '../../reducer'
import { Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux/'
import './style.scss'

class DisplayModeSelector extends React.Component {
  changeDisplayMode = (displayMode) => () => {
    const { actions } = this.props

    actions.changeDisplayMode(displayMode)
  }

  render() {
    const { weather } = this.props
    return (
      <div className="display-mode-container">
        <div className="btn-container">
          <Button
            bsStyle="default"
            onClick={this.changeDisplayMode('card')}
          >
            Cards
          </Button>
          <Button
            bsStyle="default"
            onClick={this.changeDisplayMode('stats')}
          >
            Stats
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    weather: state.weatherApp,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(DisplayModeSelector)