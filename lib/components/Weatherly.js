import React, { Component } from 'react'
import Controls from './Controls'
import RenderCurrent from './RenderCurrent'
import RenderHourly from './RenderHourly'
import RenderTenDay from './RenderTenDay'
import cleanCurrentData from '../cleanCurrentData'
import cleanTenDayData from '../cleanTenDayData'
import cleanHourlyData from '../cleanHourlyData'
import $ from 'jquery'
import key from '../key'

export default class Weatherly extends Component {
  constructor () {
    super ()
    this.state = {
      location: '',
      current: [],
      hourly: [],
      tenDay: []
    }
  }

  componentDidMount() {
    let location = localStorage.getItem('location')
    this.setState({
      location: location ? location : ''
    }, () => {
      if (location) {
        this.getWeather(location)
      }
    })
  }

  getWeather(location) {
    let cityState = location.split(', ')
    let forecastUrl =    `http://api.wunderground.com/api/${key}/forecast/hourly/forecast10day/conditions/q/${cityState[1]}/${cityState[0]}.json`
    localStorage.setItem('location', location)
    $.get(forecastUrl).then(forecast => {
      // filteredData = cleanData(forecast)
      // filteredData.tenDay
      // filteredData.hourly
      // filteredData.current
      this.setState({
        location: '',
        current: cleanCurrentData(forecast),
        hourly: cleanHourlyData(forecast),
        tenDay: cleanTenDayData(forecast)
      })
    })

  }

  render () {
    return (
      <div>
        <header>
          <Controls getWeather = {this.getWeather.bind(this)}/>
        </header>
        <section>
          <RenderCurrent currentWeather = {this.state.current} />
          <RenderHourly hourlyWeather = {this.state.hourly} />
          <RenderTenDay tenDayWeather = {this.state.tenDay} />
        </section>
      </div>
    )
  }
}
