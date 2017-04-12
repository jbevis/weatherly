import React, { Component } from 'react'
import RenderWeather from './RenderWeather'
import $ from 'jquery'

export default class Weatherly extends Component {
  constructor () {
    super ()
    this.state = {
      location: '',
      weather: []
    }
  }

  componentDidMount() {
    let location = localStorage.getItem('location')
    this.setState({location: location ? location : ''}, () => {
      this.setState({weather: this.handleSubmitButton()})
    })
  }

  handleSubmitButton() {
    debugger;
    localStorage.setItem('location', this.state.location)
    $.get(this.props.source).then(weather => {
      this.setState({weather: [weather]})
      console.log(weather)
    })
  }

  // handleClick () {
  //   let location = {location: this.state.input, id: Date.now()}
  //   this.state.weatherLocation = location.location
  //   this.setState({
  //     input: '',
  //     weatherLocation: this.state.weatherLocation
  //   })
  //   console.log(this.state.weatherLocation)
  // }

  render () {
    return (
      <header>
        <h1>Weatherly</h1>
        <input id = "input-field"
               type = "text"
               placeholder = "Search by city, zip or state"
               value = {this.state.location}
               onChange = {(event) => { this.setState({location: event.target.value})}}/>
        <button onClick = {this.handleSubmitButton.bind(this)}>
          Submit
        </button>
        <RenderWeather currentWeather = {this.state.weather}/>
      </header>
    )
  }
}
