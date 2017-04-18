import Weatherly from '../lib/components/Weatherly';
import React from 'react';
import { shallow } from 'enzyme';
import StubData from './StubData';
import cleanCurrentData from '../lib/cleanCurrentData';
import cleanTenDayData from '../lib/cleanTenDayData';
import cleanHourlyData from '../lib/cleanHourlyData';

describe('Weatherly: ', () => {
  it('should be able to set state with current data', () => {
    const wrapper = shallow(< Weatherly handleWeatherSearch = {() => {}}/>);
    const currentData = cleanCurrentData(StubData);

    wrapper.setState({
      current: currentData,
    });

    expect(wrapper.state('current').location).toEqual('Denver');
  });

  it('should be able to set state with hourly data', () => {
    const wrapper = shallow(< Weatherly handleWeatherSearch = {() => {}}/>);
    const hourlyData = cleanHourlyData(StubData);

    wrapper.setState({
      hourly: hourlyData,
    });

    expect(wrapper.state('hourly').length).toEqual(7);
  });

  it('should be able to set state with ten day data', () => {
    const wrapper = shallow(< Weatherly handleWeatherSearch = {() => {}}/>);
    const tenDayData = cleanTenDayData(StubData);

    wrapper.setState({
      tenDay: tenDayData,
    });

    expect(wrapper.state('tenDay').length).toEqual(10)
  });
});
