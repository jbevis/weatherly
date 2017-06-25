import React from 'react';
import RenderDayCard from './RenderDayCard';

const RenderTenDay = ({ tenDayWeather }) => {
  if (! tenDayWeather.length) {
    return null;
  }

  return (
    <section className = "render-daily">
      { tenDayWeather.map(day => {
        return (
          <RenderDayCard dayCard={ day }/>
        );
      }) }
    </section>
  );
};

export default RenderTenDay;
