import React from 'react'
// import cloudy from '../../img/cloudy.png'
// import rain from '../../img/cloudy.png'
// import sunny from '../../img/cloudy.png'
// import thunder from '../../img/cloudy.png'

const Weather = ({ weather, date }) => {
    const renderWeather = (weather) => {
        console.log(weather)
        switch (weather) {
            case 'sunny':
                return <img src={process.env.PUBLIC_URL + '/img/sunny.png'} alt={weather} />
            case 'cloudy':
                return <img src={process.env.PUBLIC_URL + '/img/cloudy.png'} alt={weather} />
            case 'rain':
                return <img src={process.env.PUBLIC_URL + '/img/rain.gif'} alt={weather} />
            case 'thunder':
                return <img src={process.env.PUBLIC_URL + '/img/thunder.png'} alt={weather} />
            default:
                console.log(weather)
        }
    }
    return (
<<<<<<< HEAD
        <div className="widget-container">
            <font face = "Ariel" color = "black">
            Place for Weather
            </font>
=======
        <div >
            <div>Weather widget</div>
            {renderWeather(weather)}
            <div>{date && (date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds())}</div>
>>>>>>> 597e6d08d323223da1f5886995e43f59be287b5c
        </div>
    )
}

export default Weather
