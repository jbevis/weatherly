import React, { Component } from 'react'
import RenderCurrent from './RenderCurrent'
import $ from 'jquery'
import key from '../../key'

export default class Weatherly extends Component {
  constructor () {
    super ()
    this.state = {
      location: '',
      forecast: [],
      hourly: [],
      tenDay: []
    }
  }

  componentDidMount() {
    let location = localStorage.getItem('location')
    this.setState({location: location ? location : ''}, () => {
      this.setState({weather: this.getWeather() || []})
    })
  }

  getWeather(location) {

    let forecast = `http://api.wunderground.com/api/${key}/forecast/q/CO/${this.state.location}.json`
    localStorage.setItem('location', this.state.location)
    $.get(forecast).then(forecast => {
      // filteredData = cleanData(forecast)
      // filteredData.tenDay
      // filteredData.hourly
      // filteredData.current
      this.setState({forecast: [forecast]})
    })

    // let hourly = `http://api.wunderground.com/api/c560f797f5e30763/hourly/q/CO/${this.state.location}.json`
    // localStorage.setItem('location', this.state.location)
    // $.get(hourly).then(hourly => {
    //   this.setState({hourly: [hourly]})
    // })

    // let tenDay = `http://api.wunderground.com/api/c560f797f5e30763/forecast10day/q/CO/${this.state.location}.json`
    // localStorage.setItem('location', this.state.location)
    // $.get(tenDay).then(tenDay => {
    //   this.setState({tenDay: [tenDay]})
    // })
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
               placeholder = "Search by city, state or zip"
               value = {this.state.location}
               onChange = {(event) => { this.setState({location: event.target.value})}}/>
        <button onClick = {this.getWeather.bind(this)}>
          Submit
        </button>
        <RenderCurrent currentWeather = {this.state.forecast}
                       currentLocation = {this.state.location} />
      </header>
    )
  }
}
