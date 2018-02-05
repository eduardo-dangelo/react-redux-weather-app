import React, { Component } from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'

class SearchBar extends Component {
  state = {
    city: '',
    country: ''
  }

  onInputChange = (event) => {
    this.setState({
      city: event.target.value,
    })
  }

  handleSubmit = (event) => {
    const { actions } = this.props;
    const { city, country } = this.state

    event.preventDefault()
    actions.fetchWeather(city, country)
    this.setState({
      city: '',
    })
  }

  render() {
    const { city } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
          <div className="row form-container">
            <div className="col-sm-12">
              <InputGroup>
                <FormControl
                  type="text"
                  value={city}
                  onChange={this.onInputChange}
                  placeholder="ex: city, country"
                />
                <InputGroup.Button>
                  <Button
                    className="btn-search"
                    type="submit"
                  >
                    Search
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </div>
          </div>
      </form>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(SearchBar)