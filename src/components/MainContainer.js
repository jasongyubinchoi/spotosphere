import { useState, useEffect } from 'react';
import React from 'react'
import { Animated } from "react-animated-css"
import Weather from './Weather';
import Album from './Album';
import Playlist from './Playlist';

const MainContainer = () => {
    const [init, initSet] = useState(true)
    const [weather, weatherSet] = useState('')
    const [time, timeSet] = useState(new Date())
    const updateWeather = () => {
        let url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,daily&appid=e7d52186e0e22ca020dd281f84eaed33"
        fetch(url).then(res => res.json()).then((result) => {
            let curWeather = result.current.weather[0].main
            weatherSet(curWeather)
        })
    }
    const updateDate = () => timeSet(new Date());

    useEffect(() => {
        updateWeather()
        setInterval(updateWeather(), 5000);
        setInterval(updateDate, 1000);
    }, [])  //! Important! [] dependency means called only once

    return (
        <div className="main-container">
            <Animated animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Weather weather={weather} time={time} />
            </Animated>
            <Animated animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Album />
            </Animated>
            <Animated animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Playlist />
            </Animated>
        </div>
    )
}

export default MainContainer
