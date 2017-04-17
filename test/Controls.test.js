import Controls from '../lib/components/Controls'
import Weatherly from '../lib/components/Weatherly'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanCurrentData from '../lib/cleanCurrentData'
import cleanTenDayData from '../lib/cleanTenDayData'
import cleanHourlyData from '../lib/cleanHourlyData'

describe('Controls: ', () => {

  it('state.location should change when location is submitted', () => {

    let wrapper = shallow(< Controls getWeather={()=>{}}/>)
    let inputLocation = wrapper.find('#input-field')
    let submitBtn = wrapper.find('#submitButton');

    expect(wrapper.state('location')).toEqual('')

    inputLocation.simulate('change', {target: {value:"Denver, CO"}})
    expect(wrapper.state('location')).toEqual('Denver, CO')

    submitBtn.simulate('click');
    expect(wrapper.state('location')).toEqual('')

  })

})
