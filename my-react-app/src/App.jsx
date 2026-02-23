import React, { useState } from 'react';

const api = {
  key: "d748ca49a12461f80137c4ba2cd5b185",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter" || evt.type === "click") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <h1>Ob-havo ☁️</h1>
          <div className="input-wrapper">
            <input 
              type="text"
              className="search-bar"
              placeholder="Shahar nomi (masalan: Tashkent)"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
            <button className="search-button" onClick={search}>🔍</button>
          </div>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;