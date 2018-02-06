import React, { Component } from 'react'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'

class MoreInfoModal extends Component {
  handleCloseModal = () => {
    const { actions } = this.props
    actions.closeModal()
  }

  render() {
    const { weather } = this.props

    if (weather.openModal) {
      return (
        <div>
          <div className="more-info-modal">
            testing
          </div>
          <div className="modal-container" onClick={this.handleCloseModal}/>
        </div>
      )
    }
    return null
  }
}

export default connect(
  (state) => ({
    weather: state.weatherApp,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(MoreInfoModal)
