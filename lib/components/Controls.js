import React, { Component } from 'react'

export default class Controls extends Component {
  constructor () {
    super ()
    this.state = {
      location: ''
    }
  }

  searchLocation () {
    let searchLocation = this.state.location
    if (Number.isInteger(parseInt(searchLocation)) && searchLocation.split('').length !== 5) {
      alert ('Please enter a valid zip code')
    } else if (!Number.isInteger(parseInt(searchLocation)) && !searchLocation.includes(',')) {
      alert ('Please enter a location in the following format: City, State')
    }
    this.props.getWeather(this.state.location)
    this.setState({location: ""})
  }


  render () {
    return (
      <section>
        <h1 id='logo'>Weatherly</h1>
        <section id="controls">
          <input id = "input-field"
                 type = "text"
                 placeholder = "Search by valid zip code or by City, State"
                 value = {this.state.location}
                 onChange = {(event) => { this.setState({location: event.target.value})}}/>
          <button id="submitButton" onClick = {this.searchLocation.bind(this)}>
            Submit
          </button>
        </section>
      </section>
    )
  }
}
