import React, { useState } from 'react';

const api = {
  key: "d748ca49a12461f80137c4ba2cd5b185", // O'zingizning API kalitingizni shu yerga qo'ying
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=uz`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}&lang=uz`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
          });
      });
    }
  };

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Shahar nomi..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <button onClick={getLocation} style={{marginTop: '10px', padding: '10px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.5)'}}>
            📍 Mening joyim
          </button>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].description}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;