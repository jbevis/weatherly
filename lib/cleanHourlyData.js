const cleanHourlyData = (data) => {
  let hourlyData = [];
  for (let i = 0; i < 7; i++) {
    hourlyData.push({ hour: data.hourly_forecast[i].FCTTIME.civil,
                      image: (data.hourly_forecast[i].icon_url).toString(),
                      temp: data.hourly_forecast[i].temp.english,
                      id: data.hourly_forecast[i].FCTTIME.hour,
                    });
  }
  return hourlyData;
};


export default cleanHourlyData
