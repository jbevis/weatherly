import React from 'react'
import RenderHourCard from './RenderHourCard'

const RenderHourly = ({ hourlyWeather }) => {
  if (!hourlyWeather.length) {
    return null
  }

  return (
    <section className = "render-hourly">
      <h4>7 Hour Forecast</h4>
      <div className = "horizontal-scroll">
        <RenderHourCard hourWeather = {hourlyWeather}/>
      </div>
    </section>
  )
}

export default RenderHourly
