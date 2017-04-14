const cleanHourlyData = (data) => {
  //we need to loop through the data.hourly_forceast array
  //while length < 8
  //for each index, we need time, temp and image
  let hourlyData = []
  for (let i = 0; i < 7; i++) {
    hourlyData.push({ hour: data.hourly_forecast[i].FCTTIME.civil,
                      image: (data.hourly_forecast[i].icon_url).toString(),
                      temp: data.hourly_forecast[i].temp.english,
                      id: data.hourly_forecast[i].FCTTIME.hour
                    })
  }
  return hourlyData
}


export default cleanHourlyData
