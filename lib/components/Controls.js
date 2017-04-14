import React, { Component } from 'react'

export default class Controls extends Component {
  constructor () {
    super ()
    this.state = {
      location: ''
    }
  }

  <h1>Weatherly</h1>
  <input id = "input-field"
         type = "text"
         placeholder = "Search by city, state or zip"
         value = {this.state.location}
         onChange = {(event) => { this.setState({location: event.target.value})}}/>
  <button onClick = {this.getWeather.bind(this)}>
    Submit
  </button>
}
