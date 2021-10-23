import { useState, useEffect } from 'react';
import React from 'react'
import { Animated } from "react-animated-css"
import Weather from './Weather';
import Album from './Album';
import Playlist from './Playlist';

const MainContainer = () => {
    const [init, initSet] = useState(true)
    const [weather, weatherSet] = useState('')
    const [date, dateSet] = useState(new Date())
    const convertWeather = (weather) => {
        switch (weather) {
            case 'Thunderstorm': return 'thunder'
            case 'Rain': return 'rain'
            case 'Clear': return 'sunny'
            default: return 'cloudy'
        }
    }
    const updateWeather = () => {
        let url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,daily&appid=e7d52186e0e22ca020dd281f84eaed33"
        fetch(url).then(res => res.json()).then((result) => {
            let curWeather = result.current.weather[0].main
            weatherSet(convertWeather(curWeather))
        })
    }
    const updateDate = () => dateSet(new Date());
    const getTimeOfDay = (hour) => {
        if (hour <= 5) return 'night'
        if (hour <= 10) return 'morning'
        if (hour <= 16) return 'afternoon'
        if (hour <= 20) return 'evening'
        if (hour <= 10) return 'night'
    }

    useEffect(() => {
        updateWeather()
        setInterval(updateWeather(), 5000);
        setInterval(updateDate, 1000);
    }, [])  //! Important! [] dependency means called only once

    return (
        <div className="main-container">
            <Animated className="widget-container"
                animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Weather weather={weather} date={date} />
            </Animated>
            <Animated className="widget-container"
                animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Album weather={weather} timeOfDay={getTimeOfDay(date.getHours())} />
            </Animated>
            <Animated className="widget-container"
                animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Playlist weather={weather} timeOfDay={getTimeOfDay(date.getHours())} />
            </Animated>
        </div>
    )
}

export default MainContainer
