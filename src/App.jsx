import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

const [weather, setWeather] = useState ({});


useEffect(() => {
  
  const success = pos => {
      console.log("Me ejecute")
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b85202a7acda8853e8ff53507a6f282`)
        .then(res => {
          setWeather(res.data)
        });

   }

   navigator.geolocation.getCurrentPosition(success);
   
  }, [])

  console.log(weather)

  return (
    <div className="App">
      <p>El clima en tu área</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}  ></img>
      
      <p>Pais {weather.sys?.country} </p>
      <p>Ciudad {weather.name}</p>
      <p>Temp°K {weather.main?.temp}</p>
      <p>Temp °C {weather.main?.temp-273.15}</p>
    </div>
  )
}

export default App
  