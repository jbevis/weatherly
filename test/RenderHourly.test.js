import RenderHourly from '../lib/components/RenderHourly'
import RenderHourCard from '../lib/components/RenderHourCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanHourlyData from '../lib/cleanHourlyData'

describe('RenderHourly', () => {

  it('should be rendering 7 cards containing hourly weather data', () => {
    let hourly = cleanHourlyData(StubData)
    let wrapper = shallow(< RenderHourly hourlyWeather={hourly} />)

    expect(hourly.length).toEqual(7)
    expect(wrapper.containsAllMatchingElements([
      <div className = "horizontal-scroll">
        <RenderHourCard  />
      </div>
    ])).toEqual(true)
  })

})
