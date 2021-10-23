import React from 'react'
import { Animated } from "react-animated-css"
import Weather from './Weather';
import Album from './Album';
import Playlist from './Playlist';

const MainContainer = () => {
    return (
        <div className="main-container">
            {/* <Animated animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}> */}
            <Weather />
            {/* </Animated> */}
            {/* <Animated animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}> */}
            <Album />
            {/* </Animated> */}
            {/* <Animated animationInDelay={100} animationIn="zoomIn" animationOut="fadeOut" isVisible={true}> */}
            <Playlist />
            {/* </Animated> */}
        </div>
    )
}

export default MainContainer
