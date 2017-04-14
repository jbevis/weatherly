import React from 'react'
import RenderHourCard from './RenderHourCard'

const RenderHourly = ({ hourlyWeather }) => {
  if (!hourlyWeather.length) {
    return null
  }

  return (
    <section>
      <h4>7 Hour Forecast</h4>
      <RenderHourCard hourWeather = {hourlyWeather}/>
    </section>
  )
}

export default RenderHourly
