import React from 'react'

const RenderCurrent = ({ currentWeather, currentLocation }) => {
  if(!currentWeather) {
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
      <p>High: {currentWeather.tempHigh}</p>
      <p>Low: {currentWeather.tempLow}</p>
      <p>{currentWeather.description}</p>
    </section>
  )
}

export default RenderCurrent
