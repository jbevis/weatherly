import React from 'react'

const RenderHourCard = ({ hourWeather }) => {
  return (
    <div>
      { hourWeather.map( weatherCard => {
        return (
          <article key = {weatherCard.id}>
            <p>{weatherCard.hour}</p>
            <img src = {weatherCard.image} />
            <p>{weatherCard.temp}</p>
          </article>
        )
      }) }
  </div>
  )
}

export default RenderHourCard
