import React, { Component } from 'react'

export default class Controls extends Component {
  constructor () {
    super ()
    this.state = {
      location: ''
    }
  }

  searchLocation () {
    this.props.getWeather(this.state.location)
    this.setState({location: ""})
  }

  render () {
    return (
      <section>
        <h1>Weatherly</h1>
        <input id = "input-field"
               type = "text"
               placeholder = "Search by city, state or zip"
               value = {this.state.location}
               onChange = {(event) => { this.setState({location: event.target.value})}}/>
        <button onClick = {this.searchLocation.bind(this)}>
          Submit
        </button>
      </section>
    )
  }
}
