import React from 'react'
import ProcessImage from 'react-imgpro';


const Album = ({weather, timeOfDay}) => { 
        const renderMoodImage = (weather, timeOfDay) => {
            switch (weather) {
                case 'sunny':
                    if (timeOfDay == 'morning')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/pic/uplifting.jpeg'} alt={weather} />
                    else if(timeOfDay  == 'afternoon')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/pic/alternatives.jpeg'} alt={weather} />
                    else if(timeOfDay == 'evening')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/pic/tiktoksongs.jpeg'} alt={weather} />
                    else
                      return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/pic/classical.jpeg'} alt={weather} width="600" height="600"/>
                case 'cloudy':
                    if (timeOfDay == 'morning')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/calm.jpeg'} alt={weather} />
                    else if(timeOfDay  == 'afternoon')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/study.jpeg'} alt={weather} />
                    else if(timeOfDay == 'evening')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/tiktoksongs.jpeg'} alt={weather} />
                    else
                      return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/rnb.jpeg'} alt={weather} />
                case 'rain':
                    if (timeOfDay == 'morning')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/image-sad.jpeg'} alt={weather} />
                    else if(timeOfDay  == 'afternoon')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/image-blues.jpeg'} alt={weather} />
                    else if(timeOfDay == 'evening')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/hiphops.jpeg'} alt={weather} />
                    else
                      return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/rainy.jpeg'} alt={weather} />
                case 'thunder':
                    if (timeOfDay == 'morning')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/calm.jpeg'} alt={weather} />
                    else if(timeOfDay  == 'afternoon')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/hiphops.jpeg'} alt={weather} />
                    else if(timeOfDay == 'evening')
                        return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/heavy.jpeg'} alt={weather} />
                    else
                      return <img id="mood-img" src={process.env.PUBLIC_URL + '/img/weather/lofi.jpeg'} alt={weather} />
                default:
                    console.log(weather)
            }
        }
        return (
            <div >
                {/* <font face="Ariel" color="black">
                    Current Weather
                </font> */}
                <div>{renderMoodImage(weather, timeOfDay)}</div>
            </div>
        )
    }
export default Album
