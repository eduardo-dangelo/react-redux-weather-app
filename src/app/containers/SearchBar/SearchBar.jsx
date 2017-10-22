import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../../actions/index';
import './style.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '',
      country: 'uk'
    }
  }

  onInputChange = (event) => {
    this.setState({ city: event.target.value, });
  }

  onCountrySelect = (event) => {
    this.setState({ country: event.target.value });
  }

  handleSubmit = (event) => {
    const { fetchWeather } = this.props;
    const { city, country } = this.state;
    event.preventDefault();
    fetchWeather(city, country);
    this.setState({ city: '' });
  }

  render() {
    const { city, country } = this.state;
    console.log('country', country);

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);