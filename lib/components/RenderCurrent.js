  import React from 'react'

const RenderCurrent = ({ currentWeather }) => {

  if( !currentWeather.location ) {
    return (
      <section className="main-text">
        <h2 className="welcome1">Welcome to Weatherly</h2>
        <h3 className="welcome2">Please enter a location.</h3>
      </section>
    )
  }

  return (
    <section className="current-weather">
      <div className="day-location">
        <p className="location">{currentWeather.location}</p>
        <p className="day">{currentWeather.weekday}</p>
      </div>
      <div className="temp-img">
        <img src ={currentWeather.image}/>
        <p className="current-temp">{currentWeather.currentTemp} F</p>
      </div>
      <div className="high-low">
        <p className="high"><span>High:</span> {currentWeather.tempHigh} F</p>
        <p className="low"><span>Low:</span> {currentWeather.tempLow} F</p>
      </div>
      <p>{currentWeather.description}</p>
    </section>
  )
}

export default RenderCurrent
