import React, { Component } from 'react'
import RenderLocation from './RenderLocation'

export default class Header extends Component {
  constructor () {
    super ()
    this.state = {
      input: '',
      weatherLocation: ''
    }
  }

  handleClick () {
    let location = {location: this.state.input, id: Date.now()}
    this.state.weatherLocation = location.location
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
        <RenderLocation allLocation = {this.state.weatherLocation}/>
      </header>
    )
  }
}
