import React from 'react'

const RenderWeather = ({ currentWeather }) => {
  // debugger;
  if(!currentWeather.length) {
    return (
      <section>
        <h2>Welcome to Weatherly, please enter a location.</h2>
      </section>
    )
  }

  return (
    <section>
      <h2>this should change</h2>
    </section>
  )

}

export default RenderWeather
