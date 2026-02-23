import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  // O'sha saytdan olgan kalitingizni mana shu qo'shtirnoq ichiga qo'ying
  const API_KEY = "d748ca49a12461f80137c4ba2cd5b185" 

  const searchWeather = async () => {
    if (!city) return
    setLoading(true)
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=uz`
      )
      setWeather(res.data)
    } catch (error) {
      alert("Shahar topilmadi! Iltimos, nomini to'g'ri yozing.")
    }
    setLoading(false)
  }

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>Ob-havo ☁️</h1>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Shahar nomi (masalan: Tashkent)" 
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={searchWeather}>{loading ? "..." : "🔍"}</button>
        </div>

        {weather && (
          <div className="info">
            <h2>{weather.name} 🇺🇿</h2>
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
            <p className="desc">{weather.weather[0].description}</p>
            <div className="details">
              <p>💧 Namlik: {weather.main.humidity}%</p>
              <p>💨 Shamol: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App