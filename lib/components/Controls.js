import React, { Component } from 'react'

export default class Controls extends Component {
  constructor () {
    super ()
    this.state = {
      location: ''
    }
  }

  searchLocation () {
    if (!this.state.location.includes(',')) {
      alert ('Please enter your location in the following format: City, State')
    }
    this.props.getWeather(this.state.location)
    this.setState({location: ""})
  }

  // handleKeyPress (e) {
  //   if (e.key === 'Enter') {
  //     console.log('Enter connected!')
  //   }
  // }

  render () {
    return (
      <section>
        <h1 id='logo'>Weatherly</h1>
        <section id="controls">
          <input id = "input-field"
                 type = "text"
                //  onKeyPress={this.handleKeyPress}
                 placeholder = "Search by valid zip code or by City, State"
                 value = {this.state.location}
                 onChange = {(event) => { this.setState({location: event.target.value})}}/>
          <button onClick = {this.searchLocation.bind(this)}>
            Submit
          </button>
        </section>
      </section>
    )
  }
}
