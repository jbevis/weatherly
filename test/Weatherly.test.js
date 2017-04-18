import Weatherly from '../lib/components/Weatherly'
// import Controls from '../lib/components/Controls'
import React from 'react'
import { shallow } from 'enzyme'
// import StubData from './StubData'
// import cleanCurrentData from '../lib/cleanCurrentData'
// import cleanTenDayData from '../lib/cleanTenDayData'
// import cleanHourlyData from '../lib/cleanHourlyData'

describe('Weatherly: ', () => {

  it.only('should be able to set state with correct data', () => {
    const wrapper = shallow(< Weatherly handleWeatherSearch = {() => {}}/>);

    wrapper.setState({
      current: 'Denver'
    })

    expect(wrapper.state('current')).toEqual('Denver')
  })
});
