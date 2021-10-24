import './App.css';
// Require adding cdn in index.html
import { Animated } from "react-animated-css"
import MainContainer from './components/MainContainer'
import { useState, useEffect } from 'react';

function App() {
  const [weather, weatherSet] = useState('')
  const [date, dateSet] = useState(new Date())
  const [dt, dtSet] = useState(0)
  const convertWeather = (weather) => {
    switch (weather) {
      case 'Thunderstorm': return 'thunder'
      case 'Rain': return 'rain'
      case 'Clear': return 'sunny'
      default: return 'cloudy'
    }
  }
  const updateDate = () => {
    let curDate = new Date()
    dateSet(curDate);
  }
  const getShiftedDate = (origDate, dt) => {
    let shiftedDate = new Date(origDate)
    shiftedDate.setHours(shiftedDate.getHours() + dt)
    return shiftedDate
  }
  const getTimeOfDay = (date) => {
    let hour = date.getHours()
    if (hour <= 5) return 'night'
    if (hour <= 12) return 'morning'
    if (hour <= 16) return 'afternoon'
    if (hour <= 19) return 'evening'
    else return 'night'
  }

  useEffect(() => {
    const updateWeather = () => {
      let url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,daily&appid=e7d52186e0e22ca020dd281f84eaed33"
      fetch(url).then(res => res.json()).then((result) => {
        let curWeather = result.current.weather[0].main
        weatherSet(convertWeather(curWeather))
      })
    }
    updateWeather()
    setInterval(updateWeather(), 5000);
    setInterval(updateDate, 1000);
  }, [])  //! Important! [] dependency means called only once

  const trickTime = () => {
    dtSet(parseInt(prompt("Enter how many hours you want to deviate")))
  }
  const getTheme = () => {
    return getTimeOfDay(getShiftedDate(date, dt)) + '-theme'
  }
  return (
    <div className={getTheme()}>
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <header className="App-header" onClick={trickTime}>
          Spotomosphere
        </header>
      </Animated>
      <MainContainer weather={weather} date={getShiftedDate(date, dt)} />


    </div >
  );
}

export default App;
