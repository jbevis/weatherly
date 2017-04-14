import React from 'react'

const RenderCurrent = ({ currentWeather }) => {
  console.log(currentWeather)
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
      <p>{currentWeather.tempHigh}</p>
      <p>{currentWeather.tempLow}</p>
      <p>{currentWeather.description}</p>
    </section>
  )
}

export default RenderCurrent
