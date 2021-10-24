import React from 'react'

const Weather = ({ weather, date }) => {
    const renderWeather = (weather) => {
        //console.log(weather)
        switch (weather) {
            case 'sunny':
                if (date.getHours() <= 5 || date.getHours() >= 20)
                    return <img id="weather-img" src={process.env.PUBLIC_URL + '/img/weather/sunny-night.png'} alt={weather} />
                return <img id="weather-img" src={process.env.PUBLIC_URL + '/img/weather/sunny.png'} alt={weather} />
            case 'cloudy':
                return <img id="weather-img" src={process.env.PUBLIC_URL + '/img/weather/cloudy.png'} alt={weather} />
            case 'rain':
                return <img id="weather-img" src={process.env.PUBLIC_URL + '/img/weather/rain.gif'} alt={weather} />
            case 'thunder':
                return <img id="weather-img" src={process.env.PUBLIC_URL + '/img/weather/thunder.png'} alt={weather} />
            default:
                console.log(weather)
        }
    }
    return (
        <div >
            {/* <font face="Ariel" color="black">
                Current Weather
            </font> */}
            <div>{renderWeather(weather)}</div>
            <div id="clock">{date && (String(date.getHours()).padStart(2, '0') + " : " + String(date.getMinutes()).padStart(2, '0') + " : " + String(date.getSeconds()).padStart(2, '0'))}</div>
        </div>
    )
}

export default Weather
