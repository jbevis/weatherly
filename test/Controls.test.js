import Controls from '../lib/components/Controls'
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

  it('should render an input field onto the DOM', () => {
    let wrapper = shallow(< Controls getWeather={()=>{}}/>)

    expect(wrapper.containsAllMatchingElements([
      <input id = "input-field"
             type = "text"
             placeholder = "Search by valid zip code or by City, State"
            />
    ])).toEqual(true)
  })

  it('should render a submit button onto the DOM', () => {
    let wrapper = shallow(< Controls getWeather={()=>{}}/>)

    expect(wrapper.containsAllMatchingElements([
      <button id="submitButton">
        Submit
      </button>
    ])).toEqual(true)
  })

})
