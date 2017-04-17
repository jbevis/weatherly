const stubData = {
    response: {
        version: "0.1",
        termsofService: "http://www.wunderground.com/weather/api/d/terms.html",
        features: {
            forecast: 1,
            hourly: 1,
            forecast10day: 1,
            conditions: 1
        }
    },
    current_observation: {
        image: {
            url: "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
            title: "Weather Underground",
            link: "http://www.wunderground.com"
        },
        display_location: {
            full: "Denver, CO",
            city: "Denver",
            state: "CO",
            state_name: "Colorado",
            country: "US",
            country_iso3166: "US",
            zip: "80201",
            magic: "1",
            wmo: "99999",
            latitude: "39.74000168",
            longitude: "-104.98000336",
            elevation: "1598.1"
        },
        observation_location: {
            full: "Capitol Hill, Denver, Colorado",
            city: "Capitol Hill, Denver",
            state: "Colorado",
            country: "US",
            country_iso3166: "US",
            latitude: "39.734711",
            longitude: "-104.977921",
            elevation: "5331 ft"
        },
        estimated: {},
        station_id: "KCODENVE218",
        observation_time: "Last Updated on April 17, 10:24 AM MDT",
        observation_time_rfc822: "Mon, 17 Apr 2017 10:24:08 -0600",
        observation_epoch: "1492446248",
        local_time_rfc822: "Mon, 17 Apr 2017 10:24:21 -0600",
        local_epoch: "1492446261",
        local_tz_short: "MDT",
        local_tz_long: "America/Denver",
        local_tz_offset: "-0600",
        weather: "Clear",
        temperature_string: "65.8 F (18.8 C)",
        temp_f: 65.8,
        temp_c: 18.8,
        relative_humidity: "23%",
        wind_string: "Calm",
        wind_dir: "NNW",
        wind_degrees: 336,
        wind_mph: 0,
        wind_gust_mph: 0,
        wind_kph: 0,
        wind_gust_kph: 0,
        pressure_mb: "1015",
        pressure_in: "29.99",
        pressure_trend: "-",
        dewpoint_string: "27 F (-3 C)",
        dewpoint_f: 27,
        dewpoint_c: -3,
        heat_index_string: "NA",
        heat_index_f: "NA",
        heat_index_c: "NA",
        windchill_string: "NA",
        windchill_f: "NA",
        windchill_c: "NA",
        feelslike_string: "65.8 F (18.8 C)",
        feelslike_f: "65.8",
        feelslike_c: "18.8",
        visibility_mi: "10.0",
        visibility_km: "16.1",
        solarradiation: "555",
        UV: "3.0",
        precip_1hr_string: "0.00 in ( 0 mm)",
        precip_1hr_in: "0.00",
        precip_1hr_metric: " 0",
        precip_today_string: "0.00 in (0 mm)",
        precip_today_in: "0.00",
        precip_today_metric: "0",
        icon: "clear",
        icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
        forecast_url: "http://www.wunderground.com/US/CO/Denver.html",
        history_url: "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE218",
        ob_url: "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.734711,-104.977921",
        nowcast: ""
    },
    forecast: {
        txt_forecast: {
            date: "9:09 AM MDT",
            forecastday: [{
                    period: 0,
                    icon: "mostlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
                    title: "Monday",
                    fcttext: "Partly cloudy skies this morning will become overcast during the afternoon. High 77F. ESE winds shifting to WSW at 10 to 15 mph.",
                    fcttext_metric: "Partly cloudy this morning, then becoming cloudy during the afternoon. High around 25C. SE winds shifting to WSW at 15 to 25 km/h.",
                    pop: "0"
                },
                {
                    period: 1,
                    icon: "nt_partlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
                    title: "Monday Night",
                    fcttext: "Partly cloudy. Low 47F. Winds WSW at 5 to 10 mph.",
                    fcttext_metric: "Partly cloudy skies. Low 8C. Winds WSW at 10 to 15 km/h.",
                    pop: "0"
                },
                {
                    period: 2,
                    icon: "partlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                    title: "Tuesday",
                    fcttext: "Intervals of clouds and sunshine. High 81F. Winds SSW at 10 to 15 mph.",
                    fcttext_metric: "Intervals of clouds and sunshine. High 27C. Winds SSW at 15 to 25 km/h.",
                    pop: "0"
                },
                {
                    period: 3,
                    icon: "nt_clear",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
                    title: "Tuesday Night",
                    fcttext: "A mostly clear sky. Low near 50F. Winds SW at 10 to 15 mph.",
                    fcttext_metric: "Clear skies. Low near 10C. Winds SW at 15 to 25 km/h.",
                    pop: "0"
                },
                {
                    period: 4,
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    title: "Wednesday",
                    fcttext: "Mostly sunny skies. High 74F. Winds WNW at 15 to 25 mph.",
                    fcttext_metric: "Plentiful sunshine. High 23C. Winds WNW at 25 to 40 km/h.",
                    pop: "0"
                },
                {
                    period: 5,
                    icon: "nt_clear",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
                    title: "Wednesday Night",
                    fcttext: "Mainly clear skies. Low 43F. NNE winds at 10 to 20 mph, decreasing to less than 5 mph.",
                    fcttext_metric: "Clear skies with a few passing clouds. Low 6C. Winds NE at 15 to 30 km/h.",
                    pop: "10"
                },
                {
                    period: 6,
                    icon: "rain",
                    icon_url: "http://icons.wxug.com/i/c/k/rain.gif",
                    title: "Thursday",
                    fcttext: "Partly cloudy skies during the morning hours will give way to cloudy skies and rain in the afternoon. High 67F. Winds ESE at 10 to 15 mph. Chance of rain 70%.",
                    fcttext_metric: "Partly cloudy skies during the morning hours will give way to cloudy skies and rain in the afternoon. High around 20C. Winds SE at 15 to 25 km/h. Chance of rain 70%.",
                    pop: "70"
                },
                {
                    period: 7,
                    icon: "nt_rain",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_rain.gif",
                    title: "Thursday Night",
                    fcttext: "Rain early...then remaining cloudy with showers late. Low 43F. Winds N at 10 to 15 mph. Chance of rain 70%.",
                    fcttext_metric: "Rain early...then remaining cloudy with showers late. Low 6C. N winds shifting to E at 15 to 25 km/h. Chance of rain 70%.",
                    pop: "70"
                },
                {
                    period: 8,
                    icon: "rain",
                    icon_url: "http://icons.wxug.com/i/c/k/rain.gif",
                    title: "Friday",
                    fcttext: "Rain. High around 55F. Winds N at 10 to 20 mph. Chance of rain 70%. Rainfall near a quarter of an inch.",
                    fcttext_metric: "Rain. High 13C. Winds N at 15 to 25 km/h. Chance of rain 70%.",
                    pop: "70"
                },
                {
                    period: 9,
                    icon: "nt_chancerain",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
                    title: "Friday Night",
                    fcttext: "Showers in the evening, then cloudy overnight. Low 37F. Winds NNE at 5 to 10 mph. Chance of rain 50%.",
                    fcttext_metric: "Showers in the evening, then cloudy overnight. Low 3C. Winds NNE at 10 to 15 km/h. Chance of rain 50%.",
                    pop: "50"
                },
                {
                    period: 10,
                    icon: "partlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                    title: "Saturday",
                    fcttext: "Partly cloudy skies. High 61F. Winds NNE at 5 to 10 mph.",
                    fcttext_metric: "Partly cloudy skies. High 16C. Winds NNE at 10 to 15 km/h.",
                    pop: "10"
                },
                {
                    period: 11,
                    icon: "nt_clear",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
                    title: "Saturday Night",
                    fcttext: "Clear. Low 37F. Winds W at 5 to 10 mph.",
                    fcttext_metric: "Clear skies. Low 3C. Winds WSW at 10 to 15 km/h.",
                    pop: "0"
                },
                {
                    period: 12,
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    title: "Sunday",
                    fcttext: "Plentiful sunshine. High 77F. Winds ESE at 5 to 10 mph.",
                    fcttext_metric: "Generally sunny. High around 25C. Winds ESE at 10 to 15 km/h.",
                    pop: "0"
                },
                {
                    period: 13,
                    icon: "nt_clear",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
                    title: "Sunday Night",
                    fcttext: "Mostly clear. Low near 45F. Winds SW at 5 to 10 mph.",
                    fcttext_metric: "Clear. Low 7C. Winds SSW at 10 to 15 km/h.",
                    pop: "0"
                },
                {
                    period: 14,
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    title: "Monday",
                    fcttext: "A few clouds from time to time. High 74F. Winds NW at 10 to 20 mph.",
                    fcttext_metric: "Mostly sunny skies. High 24C. Winds NW at 15 to 30 km/h.",
                    pop: "0"
                },
                {
                    period: 15,
                    icon: "nt_clear",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
                    title: "Monday Night",
                    fcttext: "Clear skies. Low 43F. Winds NW at 10 to 20 mph.",
                    fcttext_metric: "Clear skies. Low 6C. Winds NW at 15 to 30 km/h.",
                    pop: "10"
                },
                {
                    period: 16,
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    title: "Tuesday",
                    fcttext: "Except for a few afternoon clouds, mainly sunny. High 79F. Winds E at 5 to 10 mph.",
                    fcttext_metric: "Mostly sunny skies. High 26C. Winds ESE at 10 to 15 km/h.",
                    pop: "10"
                },
                {
                    period: 17,
                    icon: "nt_partlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
                    title: "Tuesday Night",
                    fcttext: "Partly cloudy. Low 47F. Winds SW at 5 to 10 mph.",
                    fcttext_metric: "A few clouds. Low 8C. Winds SSW at 10 to 15 km/h.",
                    pop: "10"
                },
                {
                    period: 18,
                    icon: "chancerain",
                    icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
                    title: "Wednesday",
                    fcttext: "Partly cloudy in the morning. Increasing clouds with periods of showers later in the day. High around 70F. Winds NNW at 10 to 15 mph. Chance of rain 60%.",
                    fcttext_metric: "Partly cloudy early followed by increasing clouds with showers developing later in the day. High 21C. Winds NNW at 15 to 25 km/h. Chance of rain 60%.",
                    pop: "60"
                },
                {
                    period: 19,
                    icon: "nt_chancerain",
                    icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
                    title: "Wednesday Night",
                    fcttext: "Showers early becoming less numerous late. Low 43F. Winds WNW at 10 to 15 mph. Chance of rain 40%.",
                    fcttext_metric: "Cloudy with occasional rain showers. Low 7C. Winds WNW at 10 to 15 km/h. Chance of rain 40%.",
                    pop: "40"
                }
            ]
        },
        simpleforecast: {
            forecastday: [{
                    date: {
                        epoch: "1492477200",
                        pretty: "7:00 PM MDT on April 17, 2017",
                        day: 17,
                        month: 4,
                        year: 2017,
                        yday: 106,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Mon",
                        weekday: "Monday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 1,
                    high: {
                        fahrenheit: "77",
                        celsius: "25"
                    },
                    low: {
                        fahrenheit: "47",
                        celsius: "8"
                    },
                    conditions: "Mostly Cloudy",
                    icon: "mostlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
                    skyicon: "",
                    pop: 0,
                    qpf_allday: { in: 0,
                        mm: 0
                    },
                    qpf_day: { in: 0,
                        mm: 0
                    },
                    qpf_night: { in: 0,
                        mm: 0
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 15,
                        kph: 24,
                        dir: "SW",
                        degrees: 223
                    },
                    avewind: {
                        mph: 12,
                        kph: 19,
                        dir: "SW",
                        degrees: 223
                    },
                    avehumidity: 20,
                    maxhumidity: 34,
                    minhumidity: 13
                },
                {
                    date: {
                        epoch: "1492563600",
                        pretty: "7:00 PM MDT on April 18, 2017",
                        day: 18,
                        month: 4,
                        year: 2017,
                        yday: 107,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Tue",
                        weekday: "Tuesday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 2,
                    high: {
                        fahrenheit: "81",
                        celsius: "27"
                    },
                    low: {
                        fahrenheit: "50",
                        celsius: "10"
                    },
                    conditions: "Partly Cloudy",
                    icon: "partlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                    skyicon: "",
                    pop: 0,
                    qpf_allday: { in: 0,
                        mm: 0
                    },
                    qpf_day: { in: 0,
                        mm: 0
                    },
                    qpf_night: { in: 0,
                        mm: 0
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 15,
                        kph: 24,
                        dir: "SSW",
                        degrees: 194
                    },
                    avewind: {
                        mph: 12,
                        kph: 19,
                        dir: "SSW",
                        degrees: 194
                    },
                    avehumidity: 27,
                    maxhumidity: 48,
                    minhumidity: 12
                },
                {
                    date: {
                        epoch: "1492650000",
                        pretty: "7:00 PM MDT on April 19, 2017",
                        day: 19,
                        month: 4,
                        year: 2017,
                        yday: 108,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Wed",
                        weekday: "Wednesday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 3,
                    high: {
                        fahrenheit: "74",
                        celsius: "23"
                    },
                    low: {
                        fahrenheit: "43",
                        celsius: "6"
                    },
                    conditions: "Clear",
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    skyicon: "",
                    pop: 0,
                    qpf_allday: { in: 0,
                        mm: 0
                    },
                    qpf_day: { in: 0,
                        mm: 0
                    },
                    qpf_night: { in: 0,
                        mm: 0
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 25,
                        kph: 40,
                        dir: "WNW",
                        degrees: 282
                    },
                    avewind: {
                        mph: 18,
                        kph: 29,
                        dir: "WNW",
                        degrees: 282
                    },
                    avehumidity: 30,
                    maxhumidity: 48,
                    minhumidity: 16
                },
                {
                    date: {
                        epoch: "1492736400",
                        pretty: "7:00 PM MDT on April 20, 2017",
                        day: 20,
                        month: 4,
                        year: 2017,
                        yday: 109,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Thu",
                        weekday: "Thursday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 4,
                    high: {
                        fahrenheit: "67",
                        celsius: "19"
                    },
                    low: {
                        fahrenheit: "43",
                        celsius: "6"
                    },
                    conditions: "Rain",
                    icon: "rain",
                    icon_url: "http://icons.wxug.com/i/c/k/rain.gif",
                    skyicon: "",
                    pop: 70,
                    qpf_allday: { in: 0.28,
                        mm: 7
                    },
                    qpf_day: { in: 0.13,
                        mm: 3
                    },
                    qpf_night: { in: 0.15,
                        mm: 4
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 15,
                        kph: 24,
                        dir: "ESE",
                        degrees: 119
                    },
                    avewind: {
                        mph: 11,
                        kph: 18,
                        dir: "ESE",
                        degrees: 119
                    },
                    avehumidity: 54,
                    maxhumidity: 77,
                    minhumidity: 30
                },
                {
                    date: {
                        epoch: "1492822800",
                        pretty: "7:00 PM MDT on April 21, 2017",
                        day: 21,
                        month: 4,
                        year: 2017,
                        yday: 110,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Fri",
                        weekday: "Friday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 5,
                    high: {
                        fahrenheit: "55",
                        celsius: "13"
                    },
                    low: {
                        fahrenheit: "37",
                        celsius: "3"
                    },
                    conditions: "Rain",
                    icon: "rain",
                    icon_url: "http://icons.wxug.com/i/c/k/rain.gif",
                    skyicon: "",
                    pop: 70,
                    qpf_allday: { in: 0.26,
                        mm: 7
                    },
                    qpf_day: { in: 0.21,
                        mm: 5
                    },
                    qpf_night: { in: 0.05,
                        mm: 1
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 20,
                        kph: 32,
                        dir: "N",
                        degrees: 3
                    },
                    avewind: {
                        mph: 13,
                        kph: 21,
                        dir: "N",
                        degrees: 3
                    },
                    avehumidity: 62,
                    maxhumidity: 80,
                    minhumidity: 42
                },
                {
                    date: {
                        epoch: "1492909200",
                        pretty: "7:00 PM MDT on April 22, 2017",
                        day: 22,
                        month: 4,
                        year: 2017,
                        yday: 111,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Sat",
                        weekday: "Saturday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 6,
                    high: {
                        fahrenheit: "61",
                        celsius: "16"
                    },
                    low: {
                        fahrenheit: "37",
                        celsius: "3"
                    },
                    conditions: "Partly Cloudy",
                    icon: "partlycloudy",
                    icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                    skyicon: "",
                    pop: 10,
                    qpf_allday: { in: 0,
                        mm: 0
                    },
                    qpf_day: { in: 0,
                        mm: 0
                    },
                    qpf_night: { in: 0,
                        mm: 0
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 10,
                        kph: 16,
                        dir: "NNE",
                        degrees: 25
                    },
                    avewind: {
                        mph: 9,
                        kph: 14,
                        dir: "NNE",
                        degrees: 25
                    },
                    avehumidity: 54,
                    maxhumidity: 85,
                    minhumidity: 26
                },
                {
                    date: {
                        epoch: "1492995600",
                        pretty: "7:00 PM MDT on April 23, 2017",
                        day: 23,
                        month: 4,
                        year: 2017,
                        yday: 112,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Sun",
                        weekday: "Sunday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 7,
                    high: {
                        fahrenheit: "77",
                        celsius: "25"
                    },
                    low: {
                        fahrenheit: "45",
                        celsius: "7"
                    },
                    conditions: "Clear",
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    skyicon: "",
                    pop: 0,
                    qpf_allday: { in: 0,
                        mm: 0
                    },
                    qpf_day: { in: 0,
                        mm: 0
                    },
                    qpf_night: { in: 0,
                        mm: 0
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 10,
                        kph: 16,
                        dir: "ESE",
                        degrees: 109
                    },
                    avewind: {
                        mph: 9,
                        kph: 14,
                        dir: "ESE",
                        degrees: 109
                    },
                    avehumidity: 39,
                    maxhumidity: 69,
                    minhumidity: 15
                },
                {
                    date: {
                        epoch: "1493082000",
                        pretty: "7:00 PM MDT on April 24, 2017",
                        day: 24,
                        month: 4,
                        year: 2017,
                        yday: 113,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Mon",
                        weekday: "Monday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 8,
                    high: {
                        fahrenheit: "74",
                        celsius: "23"
                    },
                    low: {
                        fahrenheit: "43",
                        celsius: "6"
                    },
                    conditions: "Clear",
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    skyicon: "",
                    pop: 0,
                    qpf_allday: { in: 0,
                        mm: 0
                    },
                    qpf_day: { in: 0,
                        mm: 0
                    },
                    qpf_night: { in: 0,
                        mm: 0
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 20,
                        kph: 32,
                        dir: "NW",
                        degrees: 310
                    },
                    avewind: {
                        mph: 14,
                        kph: 23,
                        dir: "NW",
                        degrees: 310
                    },
                    avehumidity: 36,
                    maxhumidity: 55,
                    minhumidity: 18
                },
                {
                    date: {
                        epoch: "1493168400",
                        pretty: "7:00 PM MDT on April 25, 2017",
                        day: 25,
                        month: 4,
                        year: 2017,
                        yday: 114,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Tue",
                        weekday: "Tuesday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 9,
                    high: {
                        fahrenheit: "79",
                        celsius: "26"
                    },
                    low: {
                        fahrenheit: "47",
                        celsius: "8"
                    },
                    conditions: "Clear",
                    icon: "clear",
                    icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
                    skyicon: "",
                    pop: 10,
                    qpf_allday: { in: 0,
                        mm: 0
                    },
                    qpf_day: { in: 0,
                        mm: 0
                    },
                    qpf_night: { in: 0,
                        mm: 0
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 10,
                        kph: 16,
                        dir: "E",
                        degrees: 99
                    },
                    avewind: {
                        mph: 9,
                        kph: 14,
                        dir: "E",
                        degrees: 99
                    },
                    avehumidity: 37,
                    maxhumidity: 63,
                    minhumidity: 15
                },
                {
                    date: {
                        epoch: "1493254800",
                        pretty: "7:00 PM MDT on April 26, 2017",
                        day: 26,
                        month: 4,
                        year: 2017,
                        yday: 115,
                        hour: 19,
                        min: "00",
                        sec: 0,
                        isdst: "1",
                        monthname: "April",
                        monthname_short: "Apr",
                        weekday_short: "Wed",
                        weekday: "Wednesday",
                        ampm: "PM",
                        tz_short: "MDT",
                        tz_long: "America/Denver"
                    },
                    period: 10,
                    high: {
                        fahrenheit: "70",
                        celsius: "21"
                    },
                    low: {
                        fahrenheit: "43",
                        celsius: "6"
                    },
                    conditions: "Chance of Rain",
                    icon: "chancerain",
                    icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
                    skyicon: "",
                    pop: 60,
                    qpf_allday: { in: 0.22,
                        mm: 6
                    },
                    qpf_day: { in: 0.12,
                        mm: 3
                    },
                    qpf_night: { in: 0.1,
                        mm: 3
                    },
                    snow_allday: { in: 0,
                        cm: 0
                    },
                    snow_day: { in: 0,
                        cm: 0
                    },
                    snow_night: { in: 0,
                        cm: 0
                    },
                    maxwind: {
                        mph: 15,
                        kph: 24,
                        dir: "NNW",
                        degrees: 346
                    },
                    avewind: {
                        mph: 12,
                        kph: 19,
                        dir: "NNW",
                        degrees: 346
                    },
                    avehumidity: 39,
                    maxhumidity: 54,
                    minhumidity: 25
                }
            ]
        }
    },
    hourly_forecast: [{
            FCTTIME: {
                hour: "11",
                hour_padded: "11",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492448400",
                pretty: "11:00 AM MDT on April 17, 2017",
                civil: "11:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "65",
                metric: "18"
            },
            dewpoint: {
                english: "30",
                metric: "-1"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "30",
            wspd: {
                english: "5",
                metric: "8"
            },
            wdir: {
                dir: "ESE",
                degrees: "121"
            },
            wx: "Partly Cloudy",
            uvi: "5",
            humidity: "27",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "65",
                metric: "18"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.89",
                metric: "1012"
            }
        },
        {
            FCTTIME: {
                hour: "12",
                hour_padded: "12",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492452000",
                pretty: "12:00 PM MDT on April 17, 2017",
                civil: "12:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "70",
                metric: "21"
            },
            dewpoint: {
                english: "28",
                metric: "-2"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "31",
            wspd: {
                english: "4",
                metric: "6"
            },
            wdir: {
                dir: "SE",
                degrees: "145"
            },
            wx: "Partly Cloudy",
            uvi: "7",
            humidity: "21",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "70",
                metric: "21"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.84",
                metric: "1011"
            }
        },
        {
            FCTTIME: {
                hour: "13",
                hour_padded: "13",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492455600",
                pretty: "1:00 PM MDT on April 17, 2017",
                civil: "1:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "73",
                metric: "23"
            },
            dewpoint: {
                english: "24",
                metric: "-4"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "46",
            wspd: {
                english: "6",
                metric: "10"
            },
            wdir: {
                dir: "SSW",
                degrees: "213"
            },
            wx: "Partly Cloudy",
            uvi: "7",
            humidity: "16",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "73",
                metric: "23"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.8",
                metric: "1009"
            }
        },
        {
            FCTTIME: {
                hour: "14",
                hour_padded: "14",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492459200",
                pretty: "2:00 PM MDT on April 17, 2017",
                civil: "2:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "75",
                metric: "24"
            },
            dewpoint: {
                english: "22",
                metric: "-6"
            },
            condition: "Mostly Cloudy",
            icon: "mostlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
            fctcode: "3",
            sky: "60",
            wspd: {
                english: "8",
                metric: "13"
            },
            wdir: {
                dir: "WSW",
                degrees: "250"
            },
            wx: "Mostly Cloudy",
            uvi: "6",
            humidity: "14",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "75",
                metric: "24"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.77",
                metric: "1008"
            }
        },
        {
            FCTTIME: {
                hour: "15",
                hour_padded: "15",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492462800",
                pretty: "3:00 PM MDT on April 17, 2017",
                civil: "3:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "76",
                metric: "24"
            },
            dewpoint: {
                english: "21",
                metric: "-6"
            },
            condition: "Mostly Cloudy",
            icon: "mostlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
            fctcode: "3",
            sky: "65",
            wspd: {
                english: "11",
                metric: "18"
            },
            wdir: {
                dir: "WSW",
                degrees: "249"
            },
            wx: "Mostly Cloudy",
            uvi: "4",
            humidity: "13",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "76",
                metric: "24"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.74",
                metric: "1007"
            }
        },
        {
            FCTTIME: {
                hour: "16",
                hour_padded: "16",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492466400",
                pretty: "4:00 PM MDT on April 17, 2017",
                civil: "4:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "76",
                metric: "24"
            },
            dewpoint: {
                english: "22",
                metric: "-6"
            },
            condition: "Overcast",
            icon: "cloudy",
            icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
            fctcode: "4",
            sky: "87",
            wspd: {
                english: "12",
                metric: "19"
            },
            wdir: {
                dir: "WSW",
                degrees: "256"
            },
            wx: "Cloudy",
            uvi: "2",
            humidity: "13",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "76",
                metric: "24"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.72",
                metric: "1006"
            }
        },
        {
            FCTTIME: {
                hour: "17",
                hour_padded: "17",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492470000",
                pretty: "5:00 PM MDT on April 17, 2017",
                civil: "5:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "75",
                metric: "24"
            },
            dewpoint: {
                english: "21",
                metric: "-6"
            },
            condition: "Overcast",
            icon: "cloudy",
            icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
            fctcode: "4",
            sky: "89",
            wspd: {
                english: "11",
                metric: "18"
            },
            wdir: {
                dir: "W",
                degrees: "273"
            },
            wx: "Cloudy",
            uvi: "1",
            humidity: "13",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "75",
                metric: "24"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.72",
                metric: "1006"
            }
        },
        {
            FCTTIME: {
                hour: "18",
                hour_padded: "18",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492473600",
                pretty: "6:00 PM MDT on April 17, 2017",
                civil: "6:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "74",
                metric: "23"
            },
            dewpoint: {
                english: "23",
                metric: "-5"
            },
            condition: "Overcast",
            icon: "cloudy",
            icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
            fctcode: "4",
            sky: "88",
            wspd: {
                english: "13",
                metric: "21"
            },
            wdir: {
                dir: "WNW",
                degrees: "288"
            },
            wx: "Cloudy",
            uvi: "0",
            humidity: "15",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "74",
                metric: "23"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.73",
                metric: "1007"
            }
        },
        {
            FCTTIME: {
                hour: "19",
                hour_padded: "19",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492477200",
                pretty: "7:00 PM MDT on April 17, 2017",
                civil: "7:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "71",
                metric: "22"
            },
            dewpoint: {
                english: "25",
                metric: "-4"
            },
            condition: "Mostly Cloudy",
            icon: "mostlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
            fctcode: "3",
            sky: "70",
            wspd: {
                english: "10",
                metric: "16"
            },
            wdir: {
                dir: "WNW",
                degrees: "293"
            },
            wx: "Mostly Cloudy",
            uvi: "0",
            humidity: "18",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "71",
                metric: "22"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.75",
                metric: "1007"
            }
        },
        {
            FCTTIME: {
                hour: "20",
                hour_padded: "20",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492480800",
                pretty: "8:00 PM MDT on April 17, 2017",
                civil: "8:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "67",
                metric: "19"
            },
            dewpoint: {
                english: "27",
                metric: "-3"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "54",
            wspd: {
                english: "7",
                metric: "11"
            },
            wdir: {
                dir: "WSW",
                degrees: "248"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "22",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "67",
                metric: "19"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.78",
                metric: "1008"
            }
        },
        {
            FCTTIME: {
                hour: "21",
                hour_padded: "21",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492484400",
                pretty: "9:00 PM MDT on April 17, 2017",
                civil: "9:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "65",
                metric: "18"
            },
            dewpoint: {
                english: "27",
                metric: "-3"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "43",
            wspd: {
                english: "7",
                metric: "11"
            },
            wdir: {
                dir: "SW",
                degrees: "221"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "23",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "65",
                metric: "18"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.8",
                metric: "1009"
            }
        },
        {
            FCTTIME: {
                hour: "22",
                hour_padded: "22",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492488000",
                pretty: "10:00 PM MDT on April 17, 2017",
                civil: "10:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "63",
                metric: "17"
            },
            dewpoint: {
                english: "27",
                metric: "-3"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "40",
            wspd: {
                english: "7",
                metric: "11"
            },
            wdir: {
                dir: "SW",
                degrees: "237"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "25",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "63",
                metric: "17"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.83",
                metric: "1010"
            }
        },
        {
            FCTTIME: {
                hour: "23",
                hour_padded: "23",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "17",
                mday_padded: "17",
                yday: "106",
                isdst: "1",
                epoch: "1492491600",
                pretty: "11:00 PM MDT on April 17, 2017",
                civil: "11:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Monday",
                weekday_name_night: "Monday Night",
                weekday_name_abbrev: "Mon",
                weekday_name_unlang: "Monday",
                weekday_name_night_unlang: "Monday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "60",
                metric: "16"
            },
            dewpoint: {
                english: "27",
                metric: "-3"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "40",
            wspd: {
                english: "7",
                metric: "11"
            },
            wdir: {
                dir: "WSW",
                degrees: "249"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "28",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "60",
                metric: "16"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.84",
                metric: "1011"
            }
        },
        {
            FCTTIME: {
                hour: "0",
                hour_padded: "00",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492495200",
                pretty: "12:00 AM MDT on April 18, 2017",
                civil: "12:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "58",
                metric: "14"
            },
            dewpoint: {
                english: "27",
                metric: "-3"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "47",
            wspd: {
                english: "6",
                metric: "10"
            },
            wdir: {
                dir: "WSW",
                degrees: "249"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "31",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "58",
                metric: "14"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.85",
                metric: "1011"
            }
        },
        {
            FCTTIME: {
                hour: "1",
                hour_padded: "01",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492498800",
                pretty: "1:00 AM MDT on April 18, 2017",
                civil: "1:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "55",
                metric: "13"
            },
            dewpoint: {
                english: "28",
                metric: "-2"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "36",
            wspd: {
                english: "5",
                metric: "8"
            },
            wdir: {
                dir: "W",
                degrees: "263"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "35",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "55",
                metric: "13"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.87",
                metric: "1012"
            }
        },
        {
            FCTTIME: {
                hour: "2",
                hour_padded: "02",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492502400",
                pretty: "2:00 AM MDT on April 18, 2017",
                civil: "2:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "54",
                metric: "12"
            },
            dewpoint: {
                english: "30",
                metric: "-1"
            },
            condition: "Clear",
            icon: "clear",
            icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
            fctcode: "1",
            sky: "29",
            wspd: {
                english: "5",
                metric: "8"
            },
            wdir: {
                dir: "W",
                degrees: "280"
            },
            wx: "Mostly Clear",
            uvi: "0",
            humidity: "39",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "54",
                metric: "12"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.89",
                metric: "1012"
            }
        },
        {
            FCTTIME: {
                hour: "3",
                hour_padded: "03",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492506000",
                pretty: "3:00 AM MDT on April 18, 2017",
                civil: "3:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "53",
                metric: "12"
            },
            dewpoint: {
                english: "30",
                metric: "-1"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "36",
            wspd: {
                english: "6",
                metric: "10"
            },
            wdir: {
                dir: "NW",
                degrees: "315"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "41",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "53",
                metric: "12"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.9",
                metric: "1013"
            }
        },
        {
            FCTTIME: {
                hour: "4",
                hour_padded: "04",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492509600",
                pretty: "4:00 AM MDT on April 18, 2017",
                civil: "4:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "51",
                metric: "11"
            },
            dewpoint: {
                english: "29",
                metric: "-2"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "43",
            wspd: {
                english: "5",
                metric: "8"
            },
            wdir: {
                dir: "W",
                degrees: "278"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "43",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "51",
                metric: "11"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.91",
                metric: "1013"
            }
        },
        {
            FCTTIME: {
                hour: "5",
                hour_padded: "05",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492513200",
                pretty: "5:00 AM MDT on April 18, 2017",
                civil: "5:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "49",
                metric: "9"
            },
            dewpoint: {
                english: "30",
                metric: "-1"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "56",
            wspd: {
                english: "3",
                metric: "5"
            },
            wdir: {
                dir: "SW",
                degrees: "232"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "48",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "49",
                metric: "9"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.91",
                metric: "1013"
            }
        },
        {
            FCTTIME: {
                hour: "6",
                hour_padded: "06",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492516800",
                pretty: "6:00 AM MDT on April 18, 2017",
                civil: "6:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "48",
                metric: "9"
            },
            dewpoint: {
                english: "29",
                metric: "-2"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
            fctcode: "2",
            sky: "59",
            wspd: {
                english: "4",
                metric: "6"
            },
            wdir: {
                dir: "SW",
                degrees: "232"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "48",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "48",
                metric: "9"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.92",
                metric: "1013"
            }
        },
        {
            FCTTIME: {
                hour: "7",
                hour_padded: "07",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492520400",
                pretty: "7:00 AM MDT on April 18, 2017",
                civil: "7:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "49",
                metric: "9"
            },
            dewpoint: {
                english: "29",
                metric: "-2"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "58",
            wspd: {
                english: "4",
                metric: "6"
            },
            wdir: {
                dir: "SW",
                degrees: "226"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "45",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "49",
                metric: "9"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.93",
                metric: "1014"
            }
        },
        {
            FCTTIME: {
                hour: "8",
                hour_padded: "08",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492524000",
                pretty: "8:00 AM MDT on April 18, 2017",
                civil: "8:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "54",
                metric: "12"
            },
            dewpoint: {
                english: "31",
                metric: "-1"
            },
            condition: "Mostly Cloudy",
            icon: "mostlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
            fctcode: "3",
            sky: "75",
            wspd: {
                english: "4",
                metric: "6"
            },
            wdir: {
                dir: "SSW",
                degrees: "210"
            },
            wx: "Mostly Cloudy",
            uvi: "0",
            humidity: "41",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "54",
                metric: "12"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.94",
                metric: "1014"
            }
        },
        {
            FCTTIME: {
                hour: "9",
                hour_padded: "09",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492527600",
                pretty: "9:00 AM MDT on April 18, 2017",
                civil: "9:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "59",
                metric: "15"
            },
            dewpoint: {
                english: "29",
                metric: "-2"
            },
            condition: "Mostly Cloudy",
            icon: "mostlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
            fctcode: "3",
            sky: "69",
            wspd: {
                english: "5",
                metric: "8"
            },
            wdir: {
                dir: "SSW",
                degrees: "197"
            },
            wx: "Mostly Cloudy",
            uvi: "1",
            humidity: "31",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "59",
                metric: "15"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.93",
                metric: "1014"
            }
        },
        {
            FCTTIME: {
                hour: "10",
                hour_padded: "10",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492531200",
                pretty: "10:00 AM MDT on April 18, 2017",
                civil: "10:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "63",
                metric: "17"
            },
            dewpoint: {
                english: "28",
                metric: "-2"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "57",
            wspd: {
                english: "7",
                metric: "11"
            },
            wdir: {
                dir: "S",
                degrees: "171"
            },
            wx: "Partly Cloudy",
            uvi: "3",
            humidity: "27",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "63",
                metric: "17"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.91",
                metric: "1013"
            }
        },
        {
            FCTTIME: {
                hour: "11",
                hour_padded: "11",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492534800",
                pretty: "11:00 AM MDT on April 18, 2017",
                civil: "11:00 AM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "AM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "68",
                metric: "20"
            },
            dewpoint: {
                english: "27",
                metric: "-3"
            },
            condition: "Mostly Cloudy",
            icon: "mostlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
            fctcode: "3",
            sky: "61",
            wspd: {
                english: "7",
                metric: "11"
            },
            wdir: {
                dir: "SE",
                degrees: "142"
            },
            wx: "Mostly Cloudy",
            uvi: "5",
            humidity: "21",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "68",
                metric: "20"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.88",
                metric: "1012"
            }
        },
        {
            FCTTIME: {
                hour: "12",
                hour_padded: "12",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492538400",
                pretty: "12:00 PM MDT on April 18, 2017",
                civil: "12:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "72",
                metric: "22"
            },
            dewpoint: {
                english: "26",
                metric: "-3"
            },
            condition: "Mostly Cloudy",
            icon: "mostlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
            fctcode: "3",
            sky: "64",
            wspd: {
                english: "8",
                metric: "13"
            },
            wdir: {
                dir: "SE",
                degrees: "136"
            },
            wx: "Mostly Cloudy",
            uvi: "5",
            humidity: "18",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "72",
                metric: "22"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.84",
                metric: "1011"
            }
        },
        {
            FCTTIME: {
                hour: "13",
                hour_padded: "13",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492542000",
                pretty: "1:00 PM MDT on April 18, 2017",
                civil: "1:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "75",
                metric: "24"
            },
            dewpoint: {
                english: "25",
                metric: "-4"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "55",
            wspd: {
                english: "8",
                metric: "13"
            },
            wdir: {
                dir: "SE",
                degrees: "141"
            },
            wx: "Partly Cloudy",
            uvi: "7",
            humidity: "15",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "75",
                metric: "24"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.8",
                metric: "1009"
            }
        },
        {
            FCTTIME: {
                hour: "14",
                hour_padded: "14",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492545600",
                pretty: "2:00 PM MDT on April 18, 2017",
                civil: "2:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "77",
                metric: "25"
            },
            dewpoint: {
                english: "24",
                metric: "-4"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "57",
            wspd: {
                english: "8",
                metric: "13"
            },
            wdir: {
                dir: "SE",
                degrees: "146"
            },
            wx: "Partly Cloudy",
            uvi: "6",
            humidity: "14",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "77",
                metric: "25"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.76",
                metric: "1008"
            }
        },
        {
            FCTTIME: {
                hour: "15",
                hour_padded: "15",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492549200",
                pretty: "3:00 PM MDT on April 18, 2017",
                civil: "3:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "79",
                metric: "26"
            },
            dewpoint: {
                english: "24",
                metric: "-4"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "53",
            wspd: {
                english: "9",
                metric: "14"
            },
            wdir: {
                dir: "SSW",
                degrees: "197"
            },
            wx: "Partly Cloudy",
            uvi: "5",
            humidity: "13",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "79",
                metric: "26"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.72",
                metric: "1006"
            }
        },
        {
            FCTTIME: {
                hour: "16",
                hour_padded: "16",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492552800",
                pretty: "4:00 PM MDT on April 18, 2017",
                civil: "4:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "80",
                metric: "27"
            },
            dewpoint: {
                english: "23",
                metric: "-5"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "55",
            wspd: {
                english: "10",
                metric: "16"
            },
            wdir: {
                dir: "SW",
                degrees: "235"
            },
            wx: "Partly Cloudy",
            uvi: "3",
            humidity: "12",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "80",
                metric: "27"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.69",
                metric: "1005"
            }
        },
        {
            FCTTIME: {
                hour: "17",
                hour_padded: "17",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492556400",
                pretty: "5:00 PM MDT on April 18, 2017",
                civil: "5:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "79",
                metric: "26"
            },
            dewpoint: {
                english: "23",
                metric: "-5"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "53",
            wspd: {
                english: "11",
                metric: "18"
            },
            wdir: {
                dir: "W",
                degrees: "261"
            },
            wx: "Partly Cloudy",
            uvi: "2",
            humidity: "12",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "79",
                metric: "26"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.66",
                metric: "1004"
            }
        },
        {
            FCTTIME: {
                hour: "18",
                hour_padded: "18",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492560000",
                pretty: "6:00 PM MDT on April 18, 2017",
                civil: "6:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "78",
                metric: "26"
            },
            dewpoint: {
                english: "23",
                metric: "-5"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "56",
            wspd: {
                english: "12",
                metric: "19"
            },
            wdir: {
                dir: "W",
                degrees: "262"
            },
            wx: "Partly Cloudy",
            uvi: "1",
            humidity: "13",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "78",
                metric: "26"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.65",
                metric: "1004"
            }
        },
        {
            FCTTIME: {
                hour: "19",
                hour_padded: "19",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492563600",
                pretty: "7:00 PM MDT on April 18, 2017",
                civil: "7:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "75",
                metric: "24"
            },
            dewpoint: {
                english: "25",
                metric: "-4"
            },
            condition: "Partly Cloudy",
            icon: "partlycloudy",
            icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
            fctcode: "2",
            sky: "46",
            wspd: {
                english: "12",
                metric: "19"
            },
            wdir: {
                dir: "WSW",
                degrees: "255"
            },
            wx: "Partly Cloudy",
            uvi: "0",
            humidity: "16",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "75",
                metric: "24"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.66",
                metric: "1004"
            }
        },
        {
            FCTTIME: {
                hour: "20",
                hour_padded: "20",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492567200",
                pretty: "8:00 PM MDT on April 18, 2017",
                civil: "8:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "70",
                metric: "21"
            },
            dewpoint: {
                english: "28",
                metric: "-2"
            },
            condition: "Clear",
            icon: "clear",
            icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
            fctcode: "1",
            sky: "20",
            wspd: {
                english: "9",
                metric: "14"
            },
            wdir: {
                dir: "WSW",
                degrees: "251"
            },
            wx: "Mostly Clear",
            uvi: "0",
            humidity: "21",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "70",
                metric: "21"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.68",
                metric: "1005"
            }
        },
        {
            FCTTIME: {
                hour: "21",
                hour_padded: "21",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492570800",
                pretty: "9:00 PM MDT on April 18, 2017",
                civil: "9:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "67",
                metric: "19"
            },
            dewpoint: {
                english: "29",
                metric: "-2"
            },
            condition: "Clear",
            icon: "clear",
            icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
            fctcode: "1",
            sky: "11",
            wspd: {
                english: "9",
                metric: "14"
            },
            wdir: {
                dir: "WSW",
                degrees: "239"
            },
            wx: "Clear",
            uvi: "0",
            humidity: "24",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "67",
                metric: "19"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.71",
                metric: "1006"
            }
        },
        {
            FCTTIME: {
                hour: "22",
                hour_padded: "22",
                min: "00",
                min_unpadded: "0",
                sec: "0",
                year: "2017",
                mon: "4",
                mon_padded: "04",
                mon_abbrev: "Apr",
                mday: "18",
                mday_padded: "18",
                yday: "107",
                isdst: "1",
                epoch: "1492574400",
                pretty: "10:00 PM MDT on April 18, 2017",
                civil: "10:00 PM",
                month_name: "April",
                month_name_abbrev: "Apr",
                weekday_name: "Tuesday",
                weekday_name_night: "Tuesday Night",
                weekday_name_abbrev: "Tue",
                weekday_name_unlang: "Tuesday",
                weekday_name_night_unlang: "Tuesday Night",
                ampm: "PM",
                tz: "",
                age: "",
                UTCDATE: ""
            },
            temp: {
                english: "65",
                metric: "18"
            },
            dewpoint: {
                english: "30",
                metric: "-1"
            },
            condition: "Clear",
            icon: "clear",
            icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
            fctcode: "1",
            sky: "8",
            wspd: {
                english: "7",
                metric: "11"
            },
            wdir: {
                dir: "SW",
                degrees: "229"
            },
            wx: "Clear",
            uvi: "0",
            humidity: "27",
            windchill: {
                english: "-9999",
                metric: "-9999"
            },
            heatindex: {
                english: "-9999",
                metric: "-9999"
            },
            feelslike: {
                english: "65",
                metric: "18"
            },
            qpf: {
                english: "0.0",
                metric: "0"
            },
            snow: {
                english: "0.0",
                metric: "0"
            },
            pop: "0",
            mslp: {
                english: "29.71",
                metric: "1006"
            }
        }
    ]
}

module.exports = stubData
