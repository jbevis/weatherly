import React from 'react'

const RenderCurrent = ({ currentWeather }) => {

  if( !currentWeather.location ) {
    return (
      <section id="main-text">
        <h2 id="welcome1">Welcome to Weatherly</h2>
        <h3 id="welcome2">Please enter a location.</h3>
      </section>
    )
  }

  return (
    <section className="current-weather">
      <div id="day-location">
        <p id="location">{currentWeather.location}</p>
        <p id="day">{currentWeather.weekday}</p>
      </div>
      <div id="temp-img">
        <img src ={currentWeather.image}/>
        <p id="current-temp">{currentWeather.currentTemp} F</p>
      </div>
      <p>High: {currentWeather.tempHigh} F</p>
      <p>Low: {currentWeather.tempLow} F</p>
      <p>{currentWeather.description}</p>
    </section>
  )
}

export default RenderCurrent
