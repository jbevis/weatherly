import RenderTenDay from '../lib/components/RenderTenDay';
import RenderDayCard from '../lib/components/RenderDayCard';
import React from 'react';
import { shallow, mount } from 'enzyme';
import StubData from './StubData';
import cleanTenDayData from '../lib/cleanTenDayData';

describe('RenderTenDay', () => {
  it('should be rendering 10 cards containing daily weather data', () => {
    const daily = cleanTenDayData(StubData);
    const wrapper = shallow(< RenderTenDay tenDayWeather={daily} />);

    expect(daily.length).toEqual(10)
    expect(wrapper.containsAllMatchingElements([
      <div className = "daily-forecats">
        <RenderDayCard />
      </div>
    ])).toEqual(true);
  });
});
