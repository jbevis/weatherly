import RenderTenDay from '../lib/components/RenderTenDay'
import RenderDayCard from '../lib/components/RenderDayCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanTenDayData from '../lib/cleanTenDayData'

describe('RenderDayCard', () => {
  it('should display a specific day on the card', () => {
    const dayData = cleanTenDayData(StubData);
    const wrapper = shallow(< RenderDayCard dayWeather = {dayData} />);
    const firstDay = wrapper.node.props.children[0].props.children[0].props.children;

    expect(firstDay).toEqual('Monday')
  });

  it('should display the projected high temperature for the first day', () => {
    const dayData = cleanTenDayData(StubData);
    const wrapper = shallow(< RenderDayCard dayWeather = {dayData} />);
    const firstDayHighTemp = wrapper.node.props.children[0].props.children[2].props.children[2];

    expect(firstDayHighTemp).toEqual('77')
  });
});
