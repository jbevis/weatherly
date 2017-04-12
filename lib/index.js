import React from 'react'
import reactDOM from 'react-dom'
import Weatherly from './components/Weatherly.js'

// reactDOM.render(<Main/>, document.getElementById('application'))
reactDOM.render(<Weatherly source = 'http://api.wunderground.com/api/c560f797f5e30763/conditions/q/CA/San_Francisco.json' />,
document.getElementById('application'))
