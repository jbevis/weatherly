import React from 'react'


const RenderDayCard = ({dayWeather}) => {
  return (
    <div>
      { dayWeather.map( dayCard => {
        return (
          <article key = {dayCard.id}>
            <p>{dayCard.day}</p>
            <img src = {dayCard.image}/>
            <p>{dayCard.high}</p>
            <p>{dayCard.low}</p>
          </article>
        )
      }) }
    </div>
  )
}

export default RenderDayCard
