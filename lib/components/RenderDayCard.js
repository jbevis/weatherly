import React from 'react'


const RenderDayCard = ({ dayWeather }) => {
  return (
    <div>
      { dayWeather.map(dayCard => {
        return (
          <article key = {dayCard.id} className = "day-card">
            <p>{dayCard.day}</p>
            <img src = {dayCard.image}/>
            <p><span>H:</span> {dayCard.high} F</p>
            <p><span>L:</span> {dayCard.low} F</p>
          </article>
        );
      }) }
    </div>
  );
};

export default RenderDayCard
