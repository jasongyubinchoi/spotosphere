import './App.css';
// Require adding cdn in index.html
import { Animated } from "react-animated-css"
import MainContainer from './components/MainContainer'
import { useState, useEffect } from 'react';

function App() {
  const [weather, weatherSet] = useState('')
  const [date, dateSet] = useState(new Date())
  const [mainTheme, mainThemeSet] = useState('App')
  const convertWeather = (weather) => {
      switch (weather) {
          case 'Thunderstorm': return 'thunder'
          case 'Rain': return 'rain'
          case 'Clear': return 'sunny'
          default: return 'cloudy'
      }
  }
  const updateDate = () => {
    dateSet(new Date());
  }
  const getTimeOfDay = (hour) => {
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
  return (
    <div className={getTimeOfDay(date)+'-theme'}>
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <header className="App-header">
          Spotomosphere
        </header>
      </Animated>
      <MainContainer weather={weather} date={date} />


    </div >
  );
}

export default App;
