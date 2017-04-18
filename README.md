# Weatherly

In this project we were tasked with building a working weather application useing React js and testing with enzyme and jest.

## Motivation

This project is part of the Front end engineering curriculum at Turing School of Software and Design for module 2.

## Code Example

```
handleWeatherSearch(weatherObj) {
    this.setState({
      location: '',
      current: cleanCurrentData(weatherObj),
      hourly: cleanHourlyData(weatherObj),
      tenDay: cleanTenDayData(weatherObj),
    });
  }

  getWeather(location) {
    const cityState = location.split(', ');
    const forecastUrl = `http://api.wunderground.com/api/${key}/forecast/hourly/forecast10day/conditions/q/${cityState[1]}/${cityState[0]}.json`;
    localStorage.setItem('location', location);
    $.get(forecastUrl).then(forecast => {
      this.handleWeatherSearch(forecast);
    });
  }
  ```
  ## Contributors
  Justyna Field and Jack Bevis
