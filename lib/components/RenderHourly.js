import React from 'react'
import RenderHourCard from './RenderHourCard'

const RenderHourly = ({ hourlyWeather }) => {
  console.log({hourlyWeather})
  return (
    <section>
      <h4>7 Hour Forecast</h4>
      <RenderHourCard hourWeather = {hourlyWeather}/>
    </section>
  )
}

export default RenderHourly
