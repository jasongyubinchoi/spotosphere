import logo from './logo.svg';
import './App.css';
// Require adding cdn in index.html
import { Animated } from "react-animated-css"
import MainContainer from './components/MainContainer'
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <header className="App-header">
          Spotomosphere
        </header>
      </Animated>
      <MainContainer />


    </div >
  );
}

export default App;
