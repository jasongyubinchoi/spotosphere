import React from 'react'
import { Animated } from "react-animated-css"
import Weather from './Weather';
import Album from './Album';
import Playlist from './Playlist';

const MainContainer = ({weather, date}) => {
    const getTimeOfDay = (hour) => {
        if (hour <= 5) return 'night'
        if (hour <= 12) return 'morning'
        if (hour <= 16) return 'afternoon'
        if (hour <= 19) return 'evening'
        else return 'night'
    }
  
    return (
        <div className="main-container">
            <Animated className="widget-container"
                animationInDelay={300} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Weather weather={weather} date={date} />
            </Animated>
            <Animated className="widget-container"
                animationInDelay={600} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Album weather={weather} timeOfDay={getTimeOfDay(date.getHours())} />
            </Animated>
            <Animated className="widget-container"
                animationInDelay={800} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Playlist weather={weather} timeOfDay={getTimeOfDay(date.getHours())} />
            </Animated>
        </div>
    )
}

export default MainContainer
