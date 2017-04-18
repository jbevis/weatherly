import RenderTenDay from '../lib/components/RenderTenDay'
import RenderDayCard from '../lib/components/RenderDayCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanTenDayData from '../lib/cleanTenDayData'

describe('RenderDayCard', () => {

  it('should display a specific day on the card', () => {
    let dayData = cleanTenDayData(StubData)
    let wrapper = shallow( < RenderDayCard dayWeather = {dayData} />)
    let firstDay = wrapper.node.props.children[0].props.children[0].props.children

    expect(firstDay).toEqual('Monday')
  })

  it('should display the projected high temperature for the first day', () => {
    let dayData = cleanTenDayData(StubData)
    let wrapper = shallow( < RenderDayCard dayWeather = {dayData} />)
    let firstDayHighTemp = wrapper.node.props.children[0].props.children[2].props.children[2]

    expect(firstDayHighTemp).toEqual('77')
  })
})
