import Controls from '../lib/components/Controls'
import React from 'react'
import { shallow } from 'enzyme'

describe('Controls: ', () => {
  it('state.location should change when location is submitted', () => {
    const wrapper = shallow(< Controls getWeather={() => {}}/>);
    const inputLocation = wrapper.find('#input-field');
    const submitBtn = wrapper.find('#submitButton');

    expect(wrapper.state('location')).toEqual('')

    inputLocation.simulate('change', { target: { value: 'Denver, CO' } })
    expect(wrapper.state('location')).toEqual('Denver, CO')

    submitBtn.simulate('click');
    expect(wrapper.state('location')).toEqual('')
  })

  it('should render an input field onto the DOM', () => {
    const wrapper = shallow(< Controls getWeather={() => {}}/>);

    expect(wrapper.containsAllMatchingElements([
      <input id = "input-field"
             type = "text"
             placeholder = "Search by valid zip code or by City, State"
            />,
    ])).toEqual(true);
  });

  it('should render a submit button onto the DOM', () => {
    const wrapper = shallow(< Controls getWeather={() => {}}/>);

    expect(wrapper.containsAllMatchingElements([
      <button id="submitButton">
        Submit
      </button>,
    ])).toEqual(true);
  });

  it('.submitButton should be called when button is clicked.', () => {
    let mockFn = jest.fn()
    let wrapper = shallow(<Controls getWeather = {mockFn}  />)
    let button = wrapper.find('button')

    button.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
});
