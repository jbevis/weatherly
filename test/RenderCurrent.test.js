import RenderCurrent from '../lib/components/RenderCurrent'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanCurrentData from '../lib/cleanCurrentData'

describe('RenderCurrent', () => {
  it('should render the current location to the DOM', () => {
    const current = cleanCurrentData(StubData);
    const wrapper = shallow(< RenderCurrent currentWeather={current} />);
    const currentLocation = wrapper.find('.location');

    expect(currentLocation.text()).toEqual('Denver')
  });

  it('should render the current temperature to the DOM', () => {
    const current = cleanCurrentData(StubData);
    const wrapper = shallow(< RenderCurrent currentWeather={current} />);
    const currentTemp = wrapper.find('.current-temp');

    expect(currentTemp.text()).toEqual('65 F')
  });

  it('should render the current weekday to the DOM', () => {
    const current = cleanCurrentData(StubData);
    const wrapper = shallow(< RenderCurrent currentWeather={current} />);
    const currentDay = wrapper.find('.day');

    expect(currentDay.text()).toEqual('Monday')
  });
});
