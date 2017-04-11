import React from 'react'

const RenderLocation = ({allLocation}) => {
  if(!allLocation) {
    return (
        <h2>The Weather Today</h2>
    )
  }

  return (
      <h2>{allLocation}</h2>
  )

}

export default RenderLocation
