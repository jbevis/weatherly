import React from 'react'


const RenderDayCard = ({dayWeather}) => {
  return (
    <div>
      { dayWeather.map( dayCard => {
        return (
          <article key = {dayCard.id}>
            <p>{dayCard.day}</p>
            <img src = {dayCard.image}/>
            <p>High: {dayCard.high} F</p>
            <p>Low: {dayCard.low} F</p>
          </article>
        )
      }) }
    </div>
  )
}

export default RenderDayCard
