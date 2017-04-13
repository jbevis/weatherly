import React, { Component } from 'react'
import RenderCurrent from './RenderCurrent'
import cleanCurrentData from '../cleanCurrentData'
import $ from 'jquery'
import key from '../../key'

export default class Weatherly extends Component {
  constructor () {
    super ()
    this.state = {
      location: '',
      forecast: []
    }
  }

  componentDidMount() {
    let location = localStorage.getItem('location')
    this.setState({location: location ? location : ''}, () => {
      this.setState({weather: this.getWeather() || []})
    })
  }

  getWeather(location) {
    let cityState = this.state.location.split(', ')
    console.log(cityState)
    let forecastUrl =    `http://api.wunderground.com/api/${key}/forecast/hourly/forecast10day/conditions/q/${cityState[1]}/${cityState[0]}.json`
    localStorage.setItem('location', this.state.location)
    $.get(forecastUrl).then(forecast => {
      // filteredData = cleanData(forecast)
      // filteredData.tenDay
      // filteredData.hourly
      // filteredData.current
      this.setState({
        location: '',
        forecast: cleanCurrentData(forecast)
      })
      console.log(this.state.forecast)
    })

  }



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
                       currentLocation = {this.state.location}
                       />
      </header>
    )
  }
}
