const cleanTenDayData = (data) => {
  let tenDayData = []

  for (let i=0; i<10; i++) {
      tenDayData.push({day: data.forecast.simpleforecast.forecastday[i].date.weekday,
                      image: (data.forecast.simpleforecast.forecastday[i].icon_url).toString(),
                      high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
                      low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit,
                      id: data.forecast.simpleforecast.forecastday[i].date.pretty
                      })
  }
  return tenDayData
}

export default cleanTenDayData
