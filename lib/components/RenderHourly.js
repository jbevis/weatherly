import React from 'react'
import RenderHourCard from './RenderHourCard'

const RenderHourly = ({ hourlyWeather }) => {
  if (!hourlyWeather.length) {
    return null;
  }

  return (
    <section className = "render-hourly">
      <h4>7 Hour Forecast</h4>
      <div className = "hour-container">
        <img className='icon' src="../images/left-arrow.png"/>
        <div className = "horizontal-scroll">
          <RenderHourCard hourWeather = {hourlyWeather} />
        </div>
        <img className='icon' src="../images/right-arrow.png"/>
      </div>
    </section>
  );
};

export default RenderHourly
