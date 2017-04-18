import React from 'react'
import RenderDayCard from './RenderDayCard'

const RenderTenDay = ({ tenDayWeather }) => {
  if (! tenDayWeather.length) {
    return null;
  }

  return (
    <section className = "render-daily">
      <h4>Ten Day Forecast</h4>
      <div className = "daily-forecats">
        <RenderDayCard dayWeather = {tenDayWeather}/>
      </div>
    </section>
  );
};

export default RenderTenDay
