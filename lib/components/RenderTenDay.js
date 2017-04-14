import React from 'react'
import RenderDayCard from './RenderDayCard'

const RenderTenDay = ({ tenDayWeather }) => {
  if (! tenDayWeather.length) {
    return null
  }

  return (
    <section>
      <h4>Ten Day Forecast</h4>
      <RenderDayCard dayWeather = {tenDayWeather}/>
    </section>
  )
}

export default RenderTenDay
