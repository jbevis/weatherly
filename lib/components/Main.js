import React, { Component } from 'react'
import WeatherlyLogo from './WeatherlyLogo'
import Header from './Header'

export default class Main extends Component {
  render () {
    return (
      <div>
        <WeatherlyLogo/>
        <Header/>
      </div>
    )
  }
}
