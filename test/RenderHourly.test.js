import RenderHourly from '../lib/components/RenderHourly'
// import RenderHourCard from '../lib/components/RenderHourCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanHourlyData from '../lib/cleanHourlyData'

describe('RenderHourly', () => {

  it.only('should render the hourly forecast to the DOM', () => {
    let hourly = cleanHourlyData(StubData)
    let wrapper = shallow(< RenderHourly hourWeather={hourly} />)
    console.log(wrapper.debug())
    let hourlyForecast = wrapper.find('.horizontal-scroll')

    expect(wrapper.find(hourlyForecast).exists().to.be(true))
  })
})
