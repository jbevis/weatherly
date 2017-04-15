import React from 'react'

const RenderCurrent = ({ currentWeather }) => {
  
  if( !currentWeather.location ) {
    return (
      <section>
        <h2>Welcome to Weatherly, please enter a location.</h2>
      </section>
    )
  }

  return (
    <section>
      <p>{currentWeather.location}</p>
      <p>{currentWeather.weekday}</p>
      <p>{currentWeather.currentTemp}</p>
      <img src ={currentWeather.image}/>
      <p>High: {currentWeather.tempHigh} F</p>
      <p>Low: {currentWeather.tempLow} F</p>
      <p>{currentWeather.description}</p>
    </section>
  )
}

export default RenderCurrent
