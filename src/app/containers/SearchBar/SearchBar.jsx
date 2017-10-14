import React, { Component } from 'react';
import { FormGroup, InputGroup, Button, FormControl, Row, Col } from 'react-bootstrap';
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
    const countryList = [
      { label: 'UK', value: 'uk' },
      { label: 'US', value: 'us' },
      { label: 'BR', value: 'br' },
    ];

    return (
      <form onSubmit={this.handleSubmit}>
          <div className="row form-container">
            <div className="col-sm-2">
              <FormControl
                componentClass="select"
                placeholder="select"
                className="select-input"
                value={country}
                onChange={this.onCountrySelect}
              >
                {countryList.map((item, key) => {
                  return <option key={key} value={item.value}>{item.label}</option>;
                })}
              </FormControl>
            </div>
            <div className="col-sm-10">

                <InputGroup>
                  <FormControl
                    type="text"
                    value={city}
                    onChange={this.onInputChange}
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