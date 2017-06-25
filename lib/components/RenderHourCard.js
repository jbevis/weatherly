import React from 'react';

const RenderHourCard = ({ hourWeather }) => {
  return (
    <article key={hourWeather.id} className="hour-card">
      <p>{hourWeather.hour}</p>
      <img src={hourWeather.image} />
      <p>{hourWeather.temp} F</p>
    </article>
  );
};

export default RenderHourCard;
