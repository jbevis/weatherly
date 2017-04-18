import Weatherly from '../lib/components/Weatherly'
import Controls from '../lib/components/Controls'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanCurrentData from '../lib/cleanCurrentData'
import cleanTenDayData from '../lib/cleanTenDayData'
import cleanHourlyData from '../lib/cleanHourlyData'

describe('Weatherly: ', () => {

  it.skip('should be able to set state with correct data', () => {
    const wrapper = shallow(< Weatherly />);
    const controls = shallow(< Controls getWeather={() => {}} />);
    const input = controls.find('#input-field');
    const submitBtn = controls.find('#submitButton');
    const hourlyTest = cleanHourlyData(StubData);

    expect(hourlyTest.length).toEqual(7)
    // expect(wrapper.state('tenDay')).toEqual([])

    input.simulate('change', { target: {value: 'Denver, CO' } })
    submitBtn.simulate('click');

    expect(wrapper.state('hourly').length).toEqual(7)
    // expect(wrapper.state('tenDay').length).toEqual(10)
  });
});
