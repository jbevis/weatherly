import RenderCurrent from '../lib/components/RenderCurrent'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanCurrentData from '../lib/cleanCurrentData'

describe('RenderCurrent', () => {

  it('should render the current location to the DOM', () => {
    let current = cleanCurrentData(StubData)
    let wrapper = shallow(< RenderCurrent currentWeather={current} />)
    let currentLocation = wrapper.find('.location')

    expect(currentLocation.text()).toEqual('Denver')
  })

  it('should render the current temperature to the DOM', () => {
    let current = cleanCurrentData(StubData)
    let wrapper = shallow(< RenderCurrent currentWeather={current} />)
    let currentTemp = wrapper.find('.current-temp')

    expect(currentTemp.text()).toEqual('65 F')
  })

  it('should render the current weekday to the DOM', () => {
    let current = cleanCurrentData(StubData)
    let wrapper = shallow(< RenderCurrent currentWeather={current} />)
    let currentDay = wrapper.find('.day')

    expect(currentDay.text()).toEqual('Monday')
  })
})
