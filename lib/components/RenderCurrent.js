import React from 'react'

const RenderCurrent = ({ currentWeather, currentLocation }) => {
  if(!currentWeather.length) {
    return (
      <section>
        <h2>Welcome to Weatherly, please enter a location.</h2>
      </section>
    )
  }

  return (
    <section>
      <p>{currentWeather[0].forecast.simpleforecast.forecastday[0].date.weekday}</p>
      <p>high: {currentWeather[0].forecast.simpleforecast.forecastday[0].high.fahrenheit} F</p>
      <p>low: {currentWeather[0].forecast.simpleforecast.forecastday[0].low.fahrenheit} F</p>
      <p>{currentWeather[0].forecast.txt_forecast.forecastday[0].fcttext}</p>
      <img src = {(currentWeather[0].forecast.simpleforecast.forecastday[0].icon_url).toString()}/>
    </section>
  )
}

export default RenderCurrent
