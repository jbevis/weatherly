import React, { Component } from 'react'

export default class Header extends Component {
  constructor () {
    super ()
    this.state = {
      input: '',
      weatherLocation: []
    }
  }

  handleClick () {
    let location = {location: this.state.input}
    this.state.weatherLocation.push(location)
    this.setState({
      input: '',
      weatherLocation: this.state.weatherLocation
    })
    console.log(this.state.weatherLocation)
  }

  render () {
    return (
      <header>
        <input id = "input-field"
               type = "text"
               placeholder = "Search by city, zip or state"
               value = {this.state.input}
               onChange = {(event) => { this.setState({input: event.target.value})}}/>
        <button onClick = {this.handleClick.bind(this)}>
          Submit
        </button>
        <section>Today's Weather</section>
      </header>
    )
  }
}
