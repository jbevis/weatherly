const cleanCurrentData = (data) => {
  return {
    location: data.current_observation.display_location.city,
    weekday: data.forecast.simpleforecast.forecastday[0].date.weekday,
    currentTemp: data.hourly_forecast[0].temp.english,
    image: (data.forecast.simpleforecast.forecastday[0].icon_url).toString(),
    tempHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    tempLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    description: data.forecast.txt_forecast.forecastday[0].fcttext,
  };
};


export default cleanCurrentData;
